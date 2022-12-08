// 2021 Day 1 Part 1

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n').map(x => parseInt(x));
let result = 0;

for (let i = 0; i < input.length; i++) {
  if (input[i] > input[i - 1]) result++;
}

console.log(result);
