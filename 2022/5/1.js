// 2022 day 5 part 1

const fs = require('fs');

// I'll just manually create arrays for the crates instead
// of parsing the provided initial crate layout diagram

let crates = [
  ['buffer crate so indexes match instructions :) '],
  ['G', 'B', 'D', 'C', 'P', 'R'],
  ['G', 'V', 'H'],
  ['M', 'P', 'J', 'D', 'Q', 'S', 'N'],
  ['M', 'N', 'C', 'D', 'G', 'L', 'S', 'P'],
  ['S', 'L', 'F', 'P', 'C', 'N', 'B', 'J'],
  ['S', 'T', 'G', 'V', 'Z', 'D', 'B', 'Q'],
  ['Q', 'T', 'F', 'H', 'M', 'Z', 'B'],
  ['F', 'B', 'D', 'M', 'C'],
  ['G', 'Q', 'C', 'F'],
];

const instructions = fs
  .readFileSync('input.txt', 'utf-8')
  .split('\r\n')
  .map((x) => x.match(/\d+/g).map((y) => parseInt(y)));

for (let move of instructions) {
  let amount = move[0];
  let start = move[1];
  let end = move[2];

  for (let i = 0; i < amount; i++) {
    crates[end].unshift(crates[start].shift());
  }
}

let result = '';

for (let i = 1; i < crates.length; i++) {
  result += crates[i][0];
}

console.log(result);
