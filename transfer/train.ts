import { loadModel, readInput } from './utils';
import * as fs from 'fs';

import * as tf from '@tensorflow/tfjs';
require('@tensorflow/tfjs-node');

const Hits = 'hits-aug';
const Negative = 'no-hits-aug';
const Epochs = 50;
const BatchSize = 0.1;

const train = async () => {
  const mobileNet = await loadModel();
  const model = tf.sequential();
  model.add(tf.layers.inputLayer({ inputShape: [1024] }));
  model.add(tf.layers.dense({ units: 1024, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1024, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 2, activation: 'softmax' }));
  await model.compile({
    optimizer: tf.train.adam(0.00001),
    loss: tf.losses.sigmoidCrossEntropy,
    metrics: ['accuracy']
  });

  const hits = require('fs')
    .readdirSync(Hits)
    .filter(f => f.endsWith('.jpg'))
    .map(f => `${Hits}/${f}`);

  const negatives = require('fs')
    .readdirSync(Negative)
    .filter(f => f.endsWith('.jpg'))
    .map(f => `${Negative}/${f}`);

  const ys = tf.tensor2d(new Array(hits.length).fill(1).concat(new Array(negatives.length).fill(0)), [
    hits.length + negatives.length,
    1
  ]);

  let xs: tf.Tensor = null;
  hits.forEach((path: string) => {
    const input = readInput(path);
    const res = mobileNet(input);
    if (xs === null) {
      xs = res;
    } else {
      xs = xs.concat(res);
    }
  });

  negatives.forEach((path: string) => {
    const input = readInput(path);
    const res = mobileNet(input);
    xs = xs.concat(res);
  });

  await model.fit(xs, ys, {
    epochs: Epochs,
    batchSize: parseInt(((hits.length + negatives.length) * BatchSize).toFixed(0)),
    callbacks: {
      onBatchEnd: async (_, logs) => {
        console.log('Cost: %s, accuracy: %s', logs.loss.toFixed(5), logs.acc.toFixed(5));
        await tf.nextFrame();
      }
    }
  });

  await model.save('file://punch_simplified');
};

train();
