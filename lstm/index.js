/*
  @ts-check
*/

// import * as tf from '@tensorflow/tfjs';

const tfn = require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');
const { readFileSync } = require('fs');

const rows = readFileSync('./paths_finished.tsv')
  .toString()
  .split('\n')
  .filter(r => !r.startsWith('#') && r.trim().length)
  .map(r => r.split('\t')[3].split(';'))
  .slice(0, 2000);

const urlIdx = {};
const idxUrl = {};
let maxLen = 0;
let idx = 1;
rows.forEach((path, i) => {
  maxLen = Math.max(path.length, maxLen);
  path.forEach(url => {
    if (!urlIdx[url]) {
      urlIdx[url] = idx;
      idxUrl[idx] = url;
      idx++;
    }
  });
});

const training = rows.slice(0, 1700);
const test = rows.slice(1700, 2000);
console.log('Total entries in the train set: %d.', training.length);
console.log('Maximum path length: %d.', maxLen);
console.log('Total pages: %d.', idx - 1);

const PathSize = 3;
const LearningRate = 0.001;

const modelSaveHandle = tfn.io.fileSystem('./data');
const modelLoadHandle = tfn.io.fileSystem('./data/model.json');

const getModel = async learningRate => {
  let model = tf.sequential();

  model.add(tf.layers.inputLayer({ inputShape: [PathSize, 1] }));

  model.add(tf.layers.lstm({ units: 10, returnSequences: true }));
  model.add(tf.layers.lstm({ units: 10, returnSequences: true }));
  model.add(tf.layers.lstm({ units: 10, returnSequences: false }));

  model.add(tf.layers.dense({ units: 70, activation: 'relu' }));
  model.add(tf.layers.dense({ units: idx, activation: 'softmax' }));

  model.summary();
  try {
    model = await tf.loadModel(modelLoadHandle);
    console.log('Model loaded');
  } catch (e) {
    console.log('Cannot load model %s. Creating new.', e.toString());
  }
  model.compile({
    optimizer: tf.train.adamax(learningRate),
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });
  return Promise.resolve(model);
};

const trainHelper = async (model, xs, ys) => {
  let epoch = 0;
  await model.fit(xs, ys, {
    shuffle: true,
    epochs: 50,
    callbacks: {
      onBatchEnd: async (batch, logs) => {
        await tf.nextFrame();
      },
      onEpochEnd(_, logs) {
        console.log('Epoch %d, accuracy %d, loss: %d', ++epoch, logs.acc.toFixed(5), logs.loss.toFixed(5));
      }
    }
  });
  await model.save(modelSaveHandle);
};

const shuffle = (a, b) => {
  let size = a.length;
  for (let i = 0; i < size; i += 1) {
    let rand = Math.floor(i + Math.random() * (size - i));
    [a[rand], a[i]] = [a[i], a[rand]];
    [b[rand], b[i]] = [b[i], b[rand]];
  }
};

const train = async (model, training) => {
  const history = [];
  const next = [];
  let totalMin = Infinity;
  for (let l = 0; l <= PathSize; l++) {
    let total = 0;
    for (let i = 0; i < training.length; i++) {
      const t = training[i];
      if (t.length <= l) {
        // console.log('Training path is less then %d', l);
        continue;
      }
      total++;
    }
    totalMin = Math.min(totalMin, total);
  }

  for (let l = 0; l <= PathSize; l++) {
    for (let i = 0; i < Math.min(training.length, totalMin); i++) {
      const t = training[i];
      if (t.length <= l) {
        // console.log('Training path is less then %d', l);
        continue;
      }
      const path = t.slice(0, l).map(u => urlIdx[u] / idx);
      while (path.length < PathSize) {
        path.push(0);
      }
      history.push([path]);
      next.push(urlIdx[t[l]]);
    }
  }
  // shuffle(history, next);
  const xs = tf.tensor3d(history).reshape([history.length, PathSize, 1]);
  const ys = tf.oneHot(next, idx).cast('float32');
  await trainHelper(model, xs, ys);
};

const predict = async (model, test) => {
  let totalMin = Infinity;
  for (let l = 0; l <= PathSize; l++) {
    let total = 0;
    for (let i = 0; i < test.length; i++) {
      const t = test[i];
      if (t.length <= l) {
        // console.log('Training path is less then %d', l);
        continue;
      }
      total++;
    }
    totalMin = Math.min(totalMin, total);
  }

  let nnSame = 0;
  let markovSame = 0;
  let total = 0;

  const markov = buildMarkov(test);

  for (let l = 0; l <= PathSize; l++) {
    for (let i = 0; i < Math.min(test.length, totalMin); i++) {
      const t = test[i];
      if (t.length <= l) {
        continue;
      }
      const original = t.slice(0, l).map(u => urlIdx[u]);
      const path = original.map(u => u / idx);
      let lastPath = original[original.length - 1];
      if (!lastPath) {
        continue;
      }
      while (path.length < PathSize) {
        path.push(0);
      }
      const pred =
        idxUrl[
          model
            .predict(tf.tensor3d([[path]], [1, 1, PathSize]).reshape([1, PathSize, 1]))
            .argMax(1)
            .dataSync()
        ];
      const actual = t[l];
      if (idxUrl[markovPredict(markov, lastPath)] === actual) {
        markovSame++;
      }
      if (pred === actual) {
        nnSame++;
      }
      total++;
    }
    console.log('LSTM %d, Markov %d', nnSame / total, markovSame / total);
  }
};

const markovPredict = (markov, page) => {
  let maxIdx = 0;
  let maxProb = 0;
  if (!markov[page]) {
    console.log('Cannot find %s', idxUrl[page]);
    return 0;
  }
  for (let i = 0; i < markov[page].length; i++) {
    if (markov[page][i] > maxProb) {
      maxIdx = i;
      maxProb = markov[page][i];
    }
  }
  return maxIdx;
};

const buildMarkov = data => {
  let matrix = [];
  for (let i = 0; i < data.length; i++) {
    const path = data[i];
    for (let p = 0; p < path.length - 1; p++) {
      const ci = urlIdx[path[p]];
      const ni = urlIdx[path[p + 1]];
      matrix[ci] = matrix[ci] || [];
      matrix[ci][ni] = matrix[ci][ni] || 0;
      matrix[ci][ni]++;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    if (!matrix[i]) {
      continue;
    }
    let total = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      total += matrix[i][j] || 0;
    }
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j] = matrix[i][j] / total || 0;
    }
  }
  return matrix;
};

getModel(LearningRate).then(m => {
  model = m;
  // predict(model, test);
  train(model, training);
});
