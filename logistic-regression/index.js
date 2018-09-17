// @ts-check

const tf = require('@tensorflow/tfjs');

const xs = [[]];
const ys = [];

for (let r = 0; r <= 255; r += 1) {
  xs[0].push(r);
  ys.push(r > 100 ? 1 : 0);
}

console.log(tf.tensor2d(xs, [1, xs[0].length]).toString());
console.log(tf.tensor1d(ys).toString());

const train = (xs, ys, iterations, learningRate) => {
  const w = tf.variable(tf.randomUniform([1, 1]), true, 'w');
  const b = tf.variable(tf.scalar(Math.random()), true, 'b');

  const predict = input => {
    const x = tf.tensor2d(input, [1, input[0].length]);
    return tf.tidy(() => {
      return tf.sigmoid(
        w
          .transpose()
          .dot(x)
          .add(b)
      );
    });
  };

  const error = tf.losses.meanSquaredError;
  const optimizer = tf.train.adam(learningRate);
  ys = tf.tensor2d(ys, [1, ys.length]);
  for (let i = 0; i < iterations; i++) {
    optimizer.minimize(() => {
      const y_ = predict(xs);
      const res = error(y_, ys);
      if (i % 30 === 0) {
        console.log('Error:', res.toString(), ys.shape);
      }
      return res;
    });
  }

  return {
    predict
  };
};

const model = train(xs, ys, 550, 0.01);
for (let i = 0; i < xs[0].length; i += 1) {
  const res = Array.from(model.predict([[xs[0][i]]]).dataSync())[0] >= 0.5;
  console.log('Expected:', ys[i] === 1, ', got', res);
}
