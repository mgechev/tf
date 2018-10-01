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
  .map(r => r.split('\t')[3].split(';'));

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

const training = rows.slice(0, rows.length - 500);
const test = rows.slice(rows.length - 500);
console.log('Total entries in the train set: %d.', training.length);
console.log('Total entries in the test set: %d.', test.length);
console.log('Maximum path length: %d.', maxLen);
console.log('Total pages: %d.', idx - 1);

const BatchSize = 128;
const PathSize = 4;

const modelSaveHandle = tfn.io.fileSystem('./data');
const modelLoadHandle = tfn.io.fileSystem('./data/model.json');

const getModel = async () => {
  const pathVector = tf.input({ shape: [PathSize, 1] });
  const lstm = tf.layers.lstm({ units: 10, returnSequences: false }).apply(pathVector);
  const dense = tf.layers.dense({ units: idx }).apply(lstm);
  const activation = tf.layers.activation({ activation: 'softmax' }).apply(dense);
  let model = tf.model({ inputs: pathVector, outputs: activation });
  try {
    model = await tf.loadModel(modelLoadHandle);
    console.log('Model loaded');
  } catch (e) {
    console.log('Cannot load model', e);
  }
  return Promise.resolve(model);
};

const predict = path => model.predict(path);

const trainHelper = async (xs, ys, iterations, learningRate, epoch) => {
  console.log('Epoch %d, batch size: %d', epoch, xs.shape[0]);
  const loss = (paths, next) => tf.losses.softmaxCrossEntropy(paths, next).mean();
  const optimizer = tf.train.adam(learningRate);
  for (let i = 0; i < iterations; i++) {
    const cost = optimizer.minimize(() => {
      return loss(predict(xs), ys.asType('float32'));
    }, true);
    if (i === iterations - 1) {
      console.log('Cost: %d', cost.dataSync()[0]);
    }
  }
  await model.save(modelSaveHandle);
};

const train = async (training, iterations, learningRate) => {
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
      history.push([path]);
      next.push(urlIdx[training[i][l]]);
    }
    if (history.length < 10) {
      continue;
    }
    for (let i = 0; i < history.length; i += BatchSize) {
      const batch = history.slice(i, i + BatchSize);
      // console.log(batch.length);
      if (batch.length === 0) continue;
      epoch++;
      const xs = tf.tensor3d(batch).reshape([batch.length, PathSize, 1]);
      const ys = tf.oneHot(next.slice(i, i + BatchSize), idx);
      await trainHelper(xs, ys, iterations, learningRate, epoch);
    }
  }
};

let model;
getModel().then(m => {
  model = m;
  train(training, 50, 0.03);
});
