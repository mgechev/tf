const tf = require('@tensorflow/tfjs');
const mobilenet = require('@tensorflow-models/mobilenet');
require('@tensorflow/tfjs-node');

const fs = require('fs');
const jpeg = require('jpeg-js');

const NUMBER_OF_CHANNELS = 3;

const readImage = path => {
  const buf = fs.readFileSync(path);
  const pixels = jpeg.decode(buf, true);
  return pixels;
};

const imageByteArray = (image, numChannels) => {
  const pixels = image.data;
  const numPixels = image.width * image.height;
  const values = new Int32Array(numPixels * numChannels);

  for (let i = 0; i < numPixels; i++) {
    for (let channel = 0; channel < numChannels; ++channel) {
      values[i * numChannels + channel] = pixels[i * 4 + channel];
    }
  }

  return values;
};

const imageToInput = (image, numChannels) => {
  const values = imageByteArray(image, numChannels);
  const outShape = [image.height, image.width, numChannels];
  const input = tf.tensor3d(values, outShape, 'int32');

  return input;
};

const loadModel = async (path, layer) => {
  const mn = new mobilenet.MobileNet(1, 1);
  mn.path = `file://${path}`;
  await mn.load();
  return input => mn.infer(input, layer);
};

const Layer = 'global_average_pooling2d_1';
const Positive = 'hits-aug';
const Negative = 'no-hits-aug';
const Epochs = 80;
const BatchSize = 0.2;
const ModelPath = './model/model.json';

const train = async () => {
  const mobileNet = await loadModel(ModelPath, Layer);
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
    .slice(0, 1000);
  const negatives = require('fs')
    .readdirSync(Negative)
    .filter(f => f.endsWith('.jpg'))
    .map(f => `${Negative}/${f}`)
    .slice(0, 500);

  const ys = tf.tensor2d(new Array(positives.length).fill(1).concat(new Array(negatives.length).fill(0)), [
    positives.length + negatives.length,
    1
  ]);

  let xs = null;
  positives.forEach((path: string) => {
    const image = readImage(path);
    const input = imageToInput(image, NUMBER_OF_CHANNELS);
    const res = mobileNet(input);
    if (xs === null) {
      xs = res;
    } else {
      xs = xs.concat(res);
    }
  });

  negatives.forEach((path: string) => {
    const image = readImage(path);
    const input = imageToInput(image, NUMBER_OF_CHANNELS);
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

  await model.save('file://punch_model');
};

train();
