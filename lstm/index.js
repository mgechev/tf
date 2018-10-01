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
  .slice(0, 1000);

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

const training = rows;
console.log('Total entries in the train set: %d.', training.length);
console.log('Maximum path length: %d.', maxLen);
console.log('Total pages: %d.', idx - 1);

const PathSize = 3;
const LearningRate = 0.01;

const modelSaveHandle = tfn.io.fileSystem('./data');
const modelLoadHandle = tfn.io.fileSystem('./data/model.json');

const getModel = async learningRate => {
  const pathVector = tf.input({ shape: [PathSize, 1] });
  const lstm = tf.layers.lstm({ units: 10, returnSequences: false }).apply(pathVector);
  // const dense1 = tf.layers.dense({ units: 10, inputShape: [PathSize], activation: 'relu' }).apply(pathVector);
  const dense2 = tf.layers.dense({ units: idx, activation: 'softmax' }).apply(lstm);
  let model = tf.model({ inputs: pathVector, outputs: dense2 });
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
  await model.fit(xs, ys, {
    shuffle: true,
    epochs: 50,
    batchSize: 128,
    verbose: 1,
    callbacks: {
      onBatchEnd: async (batch, logs) => {
        await tf.nextFrame();
      },
      onEpochEnd(_, logs) {
        console.log('Accuracy %d, loss: %d', logs.acc.toFixed(5), logs.loss.toFixed(5));
        console.log('Epoch ended');
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

  let same = 0;
  let total = 0;

  for (let l = 2; l <= PathSize; l++) {
    for (let i = 0; i < Math.min(test.length, totalMin); i++) {
      const t = test[i];
      if (t.length <= l) {
        continue;
      }
      const path = t.slice(0, l).map(u => urlIdx[u] / idx);
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
      // console.log('%s -> %s ## %s', actual, pred, path.map(p => idxUrl[p]).join(' --> '));
      if (pred === actual) {
        same++;
      }
      total++;
    }
    console.log(same / total);
  }
};

getModel(LearningRate).then(m => {
  model = m;
  predict(model, training);
  // train(model, training, 1250);
});
