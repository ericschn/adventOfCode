// 2021 Day 1 Part 2

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n').map(x => parseInt(x));
let result = 0;

for (let i = 2; i < input.length - 1; i++) {
  let a = input[i] + input[i-1] + input[i-2];
  let b = input[i + 1] + input[i] + input[i-1];
  if (b > a) result++;
}

console.log(result);
