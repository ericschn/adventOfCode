// 2020 Day 3 Part 2
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n");

const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
let xPos = 0;
let lineLength = input[0].length;
let treeCount = 0;
let treeCountArray = [];

for (slope of slopes) {
  xPos = 0;
  treeCount = 0;
  for (let i = 0; i < input.length; i += slope[1]) {
      if (input[i][xPos % lineLength] == '#') {
        treeCount++;
      }
    xPos += slope[0]
  }
  treeCountArray.push(treeCount);
}

console.log(treeCountArray.reduce((a,b) => a * b, 1));
