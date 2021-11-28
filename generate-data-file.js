const { readFileSync, writeFileSync } = require('fs');
const { parse } = require('csv-parse');

const parser = parse(readFileSync('data/data.csv'));
const records = [];

parser.on('readable', () => {
  parser.read();

  let record;
  while ((record = parser.read()) !== null) {
    records.push(record);
  }
});

parser.on('end', () => {
  const data = records.map(([code, description]) => `  ["${code}", "${description}"]`).join(',\n');
  writeFileSync('data/data.json', `[\n${data}\n]`);
});
