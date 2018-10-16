import { loadModel, readInput } from './utils';

import * as tf from '@tensorflow/tfjs';
require('@tensorflow/tfjs-node');

const Positive = 'hits-aug';
const Negative = 'no-hits-aug';
const Epochs = 80;
const BatchSize = 0.2;

const train = async () => {
  const mobileNet = await loadModel();
  const model = tf.sequential();
  model.add(tf.layers.inputLayer({ inputShape: [1024] }));
  model.add(tf.layers.dense({ units: 1024, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1024, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
  await model.compile({
    optimizer: tf.train.adam(0.0001),
    loss: tf.losses.sigmoidCrossEntropy,
    metrics: ['accuracy']
  });

  const positives = require('fs')
    .readdirSync(Positive)
    .filter(f => f.endsWith('.jpg'))
    .map(f => `${Positive}/${f}`)
    .slice(0, 1);
  const negatives = require('fs')
    .readdirSync(Negative)
    .filter(f => f.endsWith('.jpg'))
    .map(f => `${Negative}/${f}`)
    .slice(0, 1);

  const ys = tf.tensor2d(new Array(positives.length).fill(1).concat(new Array(negatives.length).fill(0)), [
    positives.length + negatives.length,
    1
  ]);

  let xs = null;
  positives.forEach((path: string) => {
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
    batchSize: (positives.length + negatives.length) * BatchSize,
    callbacks: {
      onBatchEnd: async (_, logs) => {
        console.log('Cost: %s, accuracy: %s', logs.loss.toFixed(5), logs.acc.toFixed(5));
        await tf.nextFrame();
      }
    }
  });

  // await model.save('file://punch_model');
};

train();
