const { readdirSync, renameSync } = require('fs');

const dir = 'neg';
let counter = 1;
const files = readdirSync(dir).filter(f => f.endsWith('.png'));
files.forEach(f => {
  renameSync(`${dir}/${f}`, `${dir}/${counter + '.png'}`);
  counter++;
});
