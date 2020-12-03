// 2020 Day 3 Part 1
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n");

let counter = 0;
let treeCount = 0;

for (line of input) {
  if (line[counter % 31] == '#') {
    treeCount++;
  }
  counter += 3;
}

console.log(treeCount);
