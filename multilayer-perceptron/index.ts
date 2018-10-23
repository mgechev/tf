import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-node';
import * as fs from 'fs';

const createModel = async () => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [1], units: 7, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 10, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 4, activation: 'softmax' }));
  await model.compile({
    optimizer: tf.train.adam(0.01),
    loss: tf.losses.softmaxCrossEntropy,
    metrics: ['accuracy']
  });
  return model;
};

const train = async (model, data) => {
  console.log('Total examples:', data.length, data.map);
  const xs = tf.tensor1d(data.map(d => d[0] / 365));
  const ys = tf.stack(data.map(d => d[1]));
  await model.fit(xs, ys, {
    batchSize: Math.floor(0.4 * data.length),
    epochs: 200,
    callbacks: {
      onEpochEnd: async (_, logs) => {
        console.log('Cost: %s, accuracy: %s', logs.loss.toFixed(5), logs.acc.toFixed(5));
        await tf.nextFrame();
      }
    }
  });
};

const evaluate = async (model, data) => {
  const xs = tf.tensor2d(data.map(d => [d[0] / 365]));
  const ys = tf.stack(data.map(d => d[1]));
  const result = await (model as tf.Model).evaluate(xs, ys);
  console.log(result.toString());
};

const result = shuffle(JSON.parse(fs.readFileSync('data.json').toString()));
const training = result.slice(0, Math.floor(result.length * 0.8));
const test = result.slice(Math.floor(result.length * 0.8), result.length);
createModel().then(async model => {
  await train(model, training);
  console.log('Evaluating:');
  await evaluate(model, test);
  return model;
});

function shuffle(array) {
  var size = array.length;
  var rand;
  for (var i = 0; i < size; i += 1) {
    rand = Math.floor(i + Math.random() * (size - i));
    [array[rand], array[i]] = [array[i], array[rand]];
  }
  return array;
}
