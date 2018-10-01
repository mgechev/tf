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
  .slice(0, 500);

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
  const dense = tf.layers.dense({ units: idx }).apply(lstm);
  const activation = tf.layers.activation({ activation: 'softmax' }).apply(dense);
  let model = tf.model({ inputs: pathVector, outputs: activation });
  try {
    model = await tf.loadModel(modelLoadHandle);
    console.log('Model loaded');
  } catch (e) {
    console.log('Cannot load model %s. Creating new.', e.toString());
  }
  model.compile({
    optimizer: tf.train.adam(learningRate),
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });
  return Promise.resolve(model);
};

const trainHelper = async (model, xs, ys) => {
  await model.fit(xs, ys, {
    epochs: 100,
    batchSize: 128,
    validationSplit: 0.1,
    verbose: 1,
    callbacks: {
      onBatchEnd: async (batch, logs) => {
        console.log('Accuracy %d, loss: %d', logs.acc, logs.loss);
        await tf.nextFrame();
      },
      onEpochEnd() {
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

const train = async (model, training, iterations) => {
  let epoch = 0;
  const history = [];
  const next = [];
  let totalMin = Infinity;
  for (let l = 0; l <= PathSize; l++) {
    let total = 0;
    for (let i = 0; i < training.length; i++) {
      const t = training[i];
      if (t.length <= l) {
        console.log('Training path is less then %d', l);
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
        console.log('Training path is less then %d', l);
        continue;
      }
      const path = t.slice(0, l).map(u => urlIdx[u]);
      while (path.length < PathSize) {
        path.push(0);
      }
      history.push([path]);
      next.push(urlIdx[t[l]]);
    }
  }
  shuffle(history, next);
  const xs = tf.tensor3d(history).reshape([history.length, PathSize, 1]);
  const ys = tf.oneHot(next, idx);
  await trainHelper(model, xs, ys, iterations, epoch);
};

const predict = async (model, test) => {
  let totalMin = Infinity;
  for (let l = 0; l <= PathSize; l++) {
    let total = 0;
    for (let i = 0; i < test.length; i++) {
      const t = test[i];
      if (t.length <= l) {
        console.log('Training path is less then %d', l);
        continue;
      }
      total++;
    }
    totalMin = Math.min(totalMin, total);
  }

  for (let l = 0; l <= PathSize; l++) {
    for (let i = 0; i < Math.min(test.length, totalMin); i++) {
      const t = test[i];
      if (t.length <= l) {
        console.log('Training path is less then %d', l);
        continue;
      }
      const path = t.slice(0, l).map(u => urlIdx[u]);
      while (path.length < PathSize) {
        path.push(0);
      }
      console.log(
        '%s -> %s ## %s',
        t[l],
        idxUrl[
          model
            .predict(tf.tensor3d([[path]], [1, 1, PathSize]).reshape([1, PathSize, 1]))
            .argMax(1)
            .dataSync()
        ],
        path.map(p => idxUrl[p]).join(' --> ')
      );
    }
  }
};

getModel(LearningRate).then(m => {
  model = m;
  predict(model, training);
  // train(model, training, 1250, 0.01);
});
