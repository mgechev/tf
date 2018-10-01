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

const train = rows.slice(0, rows.length - 500);
const test = rows.slice(rows.length - 500);
console.log('Total entries in the train set: %d.', train.length);
console.log('Total entries in the test set: %d.', test.length);
console.log('Maximum path length: %d.', maxLen);

const PathSize = 4;
const pathVector = tf.input({ shape: [PathSize, 1] });
const lstm = tf.layers.lstm({ units: 8, returnSequences: false }).apply(pathVector);
const dense = tf.layers.dense({ units: idx }).apply(lstm);
const activation = tf.layers.activation({ activation: 'softmax' }).apply(dense);
const model = tf.model({ inputs: pathVector, outputs: activation });

const predict = path => model.predict(path);
const loss = (paths, next) => tf.losses.softmaxCrossEntropy(paths, next).mean();
