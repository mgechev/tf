/*
  @ts-check
*/

// import * as tf from '@tensorflow/tfjs';

const tf = require('@tensorflow/tfjs');
const { readFileSync } = require('fs');

const rows = readFileSync('./paths_finished.tsv')
  .toString()
  .split('\n')
  .filter(r => !r.startsWith('#') && r.trim().length)
  .map(r => r.split('\t')[3].split(';'));

const urlIdx = {};
const idxUrl = {};
let maxLen = 0;
let idx = 1;
rows.forEach((path, i) => {
  if (path.length === 104) {
    console.log(i);
  }
  maxLen = Math.max(path.length, maxLen);
  path.forEach(url => {
    if (!urlIdx[url]) {
      urlIdx[url] = idx;
      idxUrl[idx] = url;
      idx++;
    }
  });
});

const training = rows.slice(0, rows.length - 500);
const test = rows.slice(rows.length - 500);
console.log('Total entries in the train set: %d.', training.length);
console.log('Total entries in the test set: %d.', test.length);
console.log('Maximum path length: %d.', maxLen);

const BatchSize = 128;
const PathSize = 4;
const pathVector = tf.input({ shape: [PathSize] });
const lstm = tf.layers.lstm({ units: PathSize, returnSequences: true }).apply(pathVector);
console.log(lstm.shape);
const dense = tf.layers.dense({ units: idx }).apply(lstm);
const activation = tf.layers.activation({ activation: 'softmax' }).apply(dense);
const model = tf.model({ inputs: pathVector, outputs: activation });

const predict = path => model.predict(path);

const trainHelper = (xs, ys, iterations, learningRate, epoch) => {
  console.log('Epoch %d, batch size: %d', epoch, ys.length);
  const loss = (paths, next) => tf.losses.softmaxCrossEntropy(paths, next).mean();
  const optimizer = tf.train.adam(learningRate);
  for (let i = 0; i < iterations; i++) {
    optimizer.minimize(() => {
      const y_ = predict(xs);
      const res = loss(y_, ys);
      return res;
    });
  }
};

const train = (training, iterations, learningRate) => {
  let epoch = 0;
  for (let l = 0; l < PathSize; l++) {
    const history = [];
    const next = [];
    for (let i = 0; i < training.length; i++) {
      if (training[i].length <= l) {
        continue;
      }
      const path = training[i].slice(0, l);
      while (path.length < PathSize) {
        path.push(0);
      }
      history.push(path);
      next.push([training[i][l]]);
    }
    if (history.length < 10) {
      continue;
    }
    for (let i = 0; i < history.length; i += BatchSize) {
      epoch++;
      const xs = tf.tensor3d(history.slice(i, BatchSize)).reshape([PathSize, BatchSize]);
      const yx = tf.tensor3d(next.slice(i, BatchSize)).reshape([1, BatchSize]);
      trainHelper(xs, yx, iterations, learningRate, epoch);
    }
  }
};

train(training, 50, 0.03);
