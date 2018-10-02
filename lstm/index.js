/*
  @ts-check
*/

const tfn = require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');

const rows = require('./paths_finished.js')
  .default.toString()
  .split('\n')
  .filter(r => !r.startsWith('#') && r.trim().length)
  .map(r => r.split('\t')[3].split(';'))
  .filter(r => r.length >= 4)
  .slice(0, 1000);

const urlIdx = {};
const idxUrl = {};
let TotalPages = 1;
rows.forEach((path, i) => {
  path.forEach(url => {
    if (!urlIdx[url]) {
      urlIdx[url] = TotalPages;
      idxUrl[TotalPages] = url;
      TotalPages++;
    }
  });
});

const training = rows.slice(0, 800);
const test = rows.slice(800, 1000);
console.log('Total entries in the train set: %d.', training.length);
console.log('Total pages: %d.', TotalPages - 1);

const PathLength = 3;
const LearningRate = 0.01;

const modelSaveHandle = tfn.io.fileSystem('./data');
const modelLoadHandle = tfn.io.fileSystem('./data/model.json');

const getModel = async learningRate => {
  let model = tf.sequential();

  model.add(tf.layers.inputLayer({ inputShape: [PathLength, 1] }));
  model.add(tf.layers.lstm({ units: 1 }));
  model.add(tf.layers.batchNormalization());
  model.add(tf.layers.dense({ units: TotalPages, activation: 'softmax' }));

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

const train = async (model, training) => {
  const history = [];
  const next = [];
  for (let l = 1; l <= PathLength; l++) {
    for (let i = 0; i < training.length; i++) {
      const t = training[i];
      const path = t.slice(0, l).map(u => urlIdx[u] / TotalPages);
      while (path.length < PathLength) {
        path.unshift(0);
      }
      history.push([path]);
      next.push(urlIdx[t[l]]);
    }
  }

  const xs = tf.tensor3d(history).reshape([history.length, PathLength, 1]);
  const ys = tf.oneHot(next, TotalPages).cast('float32');

  let epoch = 0;
  await model.fit(xs, ys, {
    batchSize: 512,
    epochs: 250,
    callbacks: {
      onEpochEnd(_, logs) {
        console.log('Epoch %d, accuracy %d, loss: %d', ++epoch, logs.acc.toFixed(5), logs.loss.toFixed(5));
      }
    }
  });
  await model.save(modelSaveHandle);
};

const predict = (model, test) => {
  let nnSame = 0;
  let markovSame = 0;
  let total = 0;

  const markov = buildMarkov(test);

  for (let l = 1; l <= PathLength; l++) {
    for (let i = 0; i < test.length; i++) {
      const t = test[i];
      const original = t.slice(0, l).map(u => urlIdx[u]);
      const path = original.map(u => u / TotalPages);
      while (path.length < PathLength) {
        path.unshift(0);
      }
      const pred =
        idxUrl[
          model
            .predict(tf.tensor3d([[path]], [1, 1, PathLength]).reshape([1, PathLength, 1]))
            .argMax(1)
            .dataSync()
        ];
      const actual = t[l];
      if (idxUrl[markovPredict(markov, original[original.length - 1])] === actual) {
        markovSame++;
      }
      if (pred === actual) {
        nnSame++;
      }
      total++;
    }
    console.log('Path length %d, LSTM %d, Markov %d', l, nnSame / total, markovSame / total);
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

getModel(LearningRate).then(async m => {
  model = m;
  await predict(model, test);
  // await train(model, training);
});
