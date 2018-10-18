import * as tf from '@tensorflow/tfjs';
import * as mobileNet from '@tensorflow-models/mobilenet';

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: false
  })
  .then(stream => {
    video.srcObject = stream;
  });

const video = document.getElementById('cam') as HTMLVideoElement;
const Layer = 'global_average_pooling2d_1';
const mobilenetInfer = m => (p): tf.Tensor<tf.Rank> => m.infer(p, Layer);
const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const crop = document.getElementById('crop') as HTMLCanvasElement;

const ImageSize = {
  Width: 100,
  Height: 56
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

let mobilenet: (p: any) => tf.Tensor<tf.Rank>;
tf.loadModel('http://localhost:5000/model.json').then(model => {
  mobileNet
    .load()
    .then((mn: any) => {
      mobilenet = mobilenetInfer(mn);
      console.log('MobileNet created');
    })
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
        const [punch, kick] = Array.from((model.predict(
          mobilenet(tf.fromPixels(crop))
        ) as tf.Tensor1D).dataSync() as Float32Array);
        // console.log('%cPROB' + punch, 'color: green; font-size: 30px');
        if (punch < 0.75 && kick < 0.75) {
          return;
        }
        if (punch > kick) {
          console.log('%cPUNCH', 'color: blue; font-size: 30px');
        } else {
          console.log('%cKICK', 'color: red; font-size: 30px');
        }
      }, 500);
    });
});
