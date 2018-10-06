import * as tf from '@tensorflow/tfjs';
import * as mobileNet from '@tensorflow-models/mobilenet';

const model = tf.sequential();
model.add(tf.layers.inputLayer({ inputShape: [1024] }));
model.add(tf.layers.dense({ units: 1024, activation: 'relu' }));
model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
model.compile({
  optimizer: tf.train.adam(0.0001),
  loss: tf.losses.sigmoidCrossEntropy,
  metrics: ['accuracy']
});

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: false
  })
  .then(stream => {
    video.srcObject = stream;
  });

const video = document.getElementById('cam') as HTMLVideoElement;
const images = Array.from(document.getElementsByTagName('img'));
const pos = images.slice(0, 265);
const neg = images.slice(264, images.length);
const TotalSamples = 10;
const BatchSize = 0.4;
const Layer = 'global_average_pooling2d_1';
const mobilenetInfer = m => p => m.infer(p, Layer);
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const label = document.getElementById('label') as HTMLSpanElement;

const workingImages = pos.slice(0, TotalSamples).concat(neg.slice(0, TotalSamples));
const ys = tf.tensor2d(new Array(TotalSamples).fill(1).concat(new Array(TotalSamples).fill(0)), [2 * TotalSamples, 1]);
// .reshape([1, 2 * TotalSamples]);

let mobilenet;
mobileNet
  .load()
  .then((mn: any) => {
    mobilenet = mobilenetInfer(mn);
    const xs = workingImages.map(p => mobilenet(p)).reduce((p, c) => p.concat(c));
    return model.fit(xs, ys, {
      epochs: 10,
      batchSize: TotalSamples * 2 * BatchSize,
      callbacks: {
        onBatchEnd: async (_, logs) => {
          console.log('Cost: %s, accuracy: %s', logs.loss.toFixed(5), logs.acc.toFixed(5));
          await tf.nextFrame();
        }
      }
    });
  })
  .then(() => {
    setInterval(() => {
      canvas.getContext('2d').drawImage(video, 0, 0);
      const pred = Number((model.predict(mobilenet(tf.fromPixels(canvas))) as tf.Tensor1D).dataSync()) > 0.2;
      if (pred) {
        label.innerHTML = 'Yes!';
      } else {
        label.innerHTML = 'No.';
      }
    }, 500);
  });
