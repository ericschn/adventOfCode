// 2020 Day 3 Part 2
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n");

const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
let counter = 0;
let treeCount = 0;
let treeCounts = [];

for (slope of slopes) {
  console.log(slope);
  counter = 0;
  treeCount = 0;
  for (let i = 0; i < input.length; i += slope[1]) {
      if (input[i][counter % 31] == '#') {
        treeCount++;
      }
    counter += slope[0]
  }
  treeCounts.push(treeCount);
}

console.log(treeCounts.reduce((a,b) => a * b, 1));
