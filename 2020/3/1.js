// 2020 Day 3 Part 1
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n");

const slope = 3
let lineLength = input[0].length;
let xPos = 0;
let treeCount = 0;

for (line of input) {
  if (line[xPos % lineLength] == '#') {
    treeCount++;
  }
  xPos += slope;
}

console.log(treeCount);
