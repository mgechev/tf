import * as tf from '@tensorflow/tfjs';
import * as mobileNet from '@tensorflow-models/mobilenet';

const modelName = 'model-1';

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
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const crop = document.getElementById('crop') as HTMLCanvasElement;
const label = document.getElementById('label') as HTMLSpanElement;

const positive = document.getElementById('pos') as HTMLImageElement;
const negative = document.getElementById('neg') as HTMLImageElement;

const totalPositive = 150;
const totalNegative = 150;

const start = 0;

const perRow = 8;
const Epochs = 40;

const ImageSize = {
  Width: 100,
  Height: 56
};

const ys = tf.tensor2d(new Array(totalPositive - start).fill(1).concat(new Array(totalNegative - start).fill(0)), [
  totalPositive + totalNegative - 2 * start,
  1
]);

const generateImages = (img: HTMLImageElement, start: number, end: number, cb) => {
  let row = 0;
  let col = 0;
  for (let i = start; i < end; i++) {
    crop
      .getContext('2d')
      .drawImage(
        img,
        col * ImageSize.Width,
        row * ImageSize.Height,
        ImageSize.Width,
        ImageSize.Height,
        0,
        0,
        ImageSize.Width,
        ImageSize.Height
      );
    cb(crop);
    row++;
    if (row >= perRow) {
      row = 0;
      col++;
    }
  }
};

const grayscale = (canvas: HTMLCanvasElement) => {
  const imageData = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;
    data[i + 1] = avg;
    data[i + 2] = avg;
  }
  canvas.getContext('2d').putImageData(imageData, 0, 0);
};

const createModel = () => {
  const model = tf.sequential();
  model.add(tf.layers.inputLayer({ inputShape: [1024] }));
  model.add(tf.layers.dense({ units: 1024, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1024, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
  return tf
    .loadModel('indexeddb://' + modelName)
    .then((model: tf.Model) => {
      console.log('Loaded model:', modelName);
      return model;
    })
    .catch(() => {
      console.log('Creating a new model');
      return Promise.resolve(model);
    })
    .then((model: tf.Model) => {
      model.compile({
        optimizer: tf.train.adam(0.0001),
        loss: tf.losses.sigmoidCrossEntropy,
        metrics: ['accuracy']
      });
      return model;
    });
};

let mobilenet: (p: any) => tf.Tensor<tf.Rank>;
createModel().then(model => {
  mobileNet
    .load()
    .then((mn: any) => {
      mobilenet = mobilenetInfer(mn);
      console.log('MobileNet created');
      let xs: tf.Tensor<tf.Rank> = null;
      console.log('Generating positive examples');
      generateImages(positive, start, totalPositive, (canvas: HTMLCanvasElement) => {
        const res = mobilenet(canvas);
        if (xs === null) {
          xs = res;
        } else {
          xs = xs.concat(res);
        }
      });
      console.log('Generating negative examples');
      generateImages(negative, start, totalNegative, (canvas: HTMLCanvasElement) => {
        xs = xs.concat(mobilenet(canvas));
      });
      console.log('Training the model');
      return model.fit(xs, ys, {
        epochs: Epochs,
        batchSize: (totalPositive + totalNegative) * BatchSize,
        callbacks: {
          onBatchEnd: async (_, logs) => {
            console.log('Cost: %s, accuracy: %s', logs.loss.toFixed(5), logs.acc.toFixed(5));
            await tf.nextFrame();
          }
        }
      });
    })
    .then(() => model.save('indexeddb://' + modelName))
    .then(() => {
      setInterval(() => {
        canvas.getContext('2d').drawImage(video, 0, 0);
        crop.getContext('2d').drawImage(canvas, 0, 0, ImageSize.Width, ImageSize.Height);

        crop
          .getContext('2d')
          .drawImage(
            canvas,
            0,
            0,
            canvas.width,
            canvas.width / (ImageSize.Width / ImageSize.Height),
            0,
            0,
            ImageSize.Width,
            ImageSize.Height
          );

        grayscale(crop);
        const prob = Number((model.predict(mobilenet(tf.fromPixels(crop))) as tf.Tensor1D).dataSync());
        console.log('Probability', prob);
        const pred = prob >= 0.7;
        if (pred) {
          label.innerHTML = 'Yes!';
        } else {
          label.innerHTML = 'No.';
        }
      }, 500);
    });
});
