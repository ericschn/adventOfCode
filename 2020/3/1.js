// 2020 Day 3 Part 1
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n");

let counter = 0;
let treeCount = 0;
let lineLength = input[0].length;

for (line of input) {
  if (line[counter % lineLength] == '#') {
    treeCount++;
  }
  counter += 3;
}

console.log(treeCount);
