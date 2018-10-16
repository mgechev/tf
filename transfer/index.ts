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
const BatchSize = 0.4;
const Layer = 'global_average_pooling2d_1';
const mobilenetInfer = m => (p): tf.Tensor<tf.Rank> => m.infer(p, Layer);
// const canvas = document.getElementById('canvas') as HTMLCanvasElement;
// const label = document.getElementById('label') as HTMLSpanElement;

const positive = document.getElementById('pos') as HTMLImageElement;
const negative = document.getElementById('neg') as HTMLImageElement;
const totalPositive = 500;
const totalNegative = 500;

const ImageSize = {
  Width: 100,
  Height: 56
};

const ys = tf.tensor2d(new Array(totalPositive).fill(1).concat(new Array(totalNegative).fill(0)), [
  totalPositive + totalNegative,
  1
]);

const generateImages = (img: HTMLImageElement, cb) => {
  let row = 0;
  let col = 0;
  const crop = document.getElementById('crop') as HTMLCanvasElement;
  for (let i = 0; i < totalPositive; i++) {
    crop
      .getContext('2d')
      .drawImage(img, col * ImageSize.Width, row * ImageSize.Height, ImageSize.Width, ImageSize.Height);
    cb(crop);
    col++;
    if (i > 7500) {
      row++;
      col = 0;
    }
  }
};

let mobilenet: (p: any) => tf.Tensor<tf.Rank>;
mobileNet
  .load()
  .then((mn: any) => {
    mobilenet = mobilenetInfer(mn);
    console.log('MobileNet created');
    let xs: tf.Tensor<tf.Rank> = null;
    console.log('Generating positive examples');
    generateImages(positive, (canvas: HTMLCanvasElement) => {
      const res = mobilenet(canvas);
      if (xs === null) {
        xs = res;
      } else {
        xs = xs.concat(res);
      }
    });
    console.log('Generating negative examples');
    generateImages(negative, (canvas: HTMLCanvasElement) => {
      xs = xs.concat(mobilenet(canvas));
    });
    console.log('Training the model');
    return model.fit(xs, ys, {
      epochs: 10,
      batchSize: (totalPositive + totalNegative) * BatchSize,
      callbacks: {
        onBatchEnd: async (_, logs) => {
          console.log('Cost: %s, accuracy: %s', logs.loss.toFixed(5), logs.acc.toFixed(5));
          await tf.nextFrame();
        }
      }
    });
  })
  .then(() => {
    // setInterval(() => {
    //   canvas.getContext('2d').drawImage(video, 0, 0);
    //   const pred = Number((model.predict(mobilenet(tf.fromPixels(canvas))) as tf.Tensor1D).dataSync()) > 0.2;
    //   if (pred) {
    //     label.innerHTML = 'Yes!';
    //   } else {
    //     label.innerHTML = 'No.';
    //   }
    // }, 500);
  });
