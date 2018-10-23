import * as fs from 'fs';

const summerStart = new Date('June 21, 2019');
const summerEnd = new Date('September 23 2019');
const winterStart = new Date('December 21, 2018');
const winterEnd = new Date('March 20 2019');
const springStart = new Date('March 20, 2019');
const springEnd = new Date('June 21 2019');
const fallStart = new Date('September 23, 2018');
const fallEnd = new Date('December 21 2018');

const data = [
  {
    start: summerStart,
    end: summerEnd,
    value: [1, 0, 0, 0]
  },
  {
    start: springStart,
    end: springEnd,
    value: [0, 1, 0, 0]
  },
  {
    start: fallStart,
    end: fallEnd,
    value: [0, 0, 1, 0]
  },
  {
    start: winterStart,
    end: winterEnd,
    value: [0, 0, 0, 1]
  }
];
const TotalItems = Math.floor(300 / 4);
const result = [];

const toDay = (ms: number) => {
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
};

for (let s = 0; s < data.length; s++) {
  const firstDate = new Date(`1/1/${data[s].start.getFullYear()}`).getTime();
  const picked = {};
  for (let i = 0; i < TotalItems; i++) {
    const { start, end, value } = data[s];
    const startDay = toDay(start.getTime() - firstDate);
    const endDay = toDay(end.getTime() - firstDate);
    let day = Math.ceil(Math.random() * (endDay - startDay) + startDay);
    while (picked[day]) {
      day = Math.ceil(Math.random() * (endDay - startDay) + startDay);
    }
    picked[day] = true;
    result.push([day, value]);
  }
}

fs.writeFileSync('data.json', JSON.stringify(result));
