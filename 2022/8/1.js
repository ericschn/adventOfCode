// 2022 Day 8 part 1

const fs = require('fs');
const treeGrid = fs
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((x) => {
    return x.split('').map((x) => [parseInt(x), false]);
  });

// Mark border trees as visible
treeGrid.forEach((row, rowIndex) => {
  for (let i = 0; i < row.length; i++) {
    if (i === 0 || i === row.length - 1) row[i][1] = true;
    if (rowIndex === 0 || rowIndex === treeGrid.length - 1) row[i][1] = true;
  }
});

// West to East
for (let i = 0; i < treeGrid.length; i++) {
  let currentHeight = 0;
  for (let j = 0; j < treeGrid[i].length; j++) {
    if (treeGrid[i][j][0] > currentHeight) {
      treeGrid[i][j][1] = true;
      currentHeight = treeGrid[i][j][0];
    }
  }
}

// East to West
for (let i = treeGrid.length - 1; i > 0; i--) {
  let currentHeight = 0;
  for (let j = treeGrid[i].length - 1; j > 0; j--) {
    if (treeGrid[i][j][0] > currentHeight) {
      treeGrid[i][j][1] = true;
      currentHeight = treeGrid[i][j][0];
    }
  }
}

// North to South
for (let i = 0; i < treeGrid[0].length; i++) {
  let currentHeight = 0;
  for (let j = 0; j < treeGrid.length; j++) {
    if (treeGrid[j][i][0] > currentHeight) {
      treeGrid[j][i][1] = true;
      currentHeight = treeGrid[j][i][0];
    }
  }
}

// South to North
for (let i = treeGrid[0].length - 1; i > 0; i--) {
  let currentHeight = 0;
  for (let j = treeGrid.length - 1; j > 0; j--) {
    if (treeGrid[j][i][0] > currentHeight) {
      treeGrid[j][i][1] = true;
      currentHeight = treeGrid[j][i][0];
    }
  }
}

// Count number of visible trees and print result
let treeCount = 0;
for (let row of treeGrid) {
  for (let tree of row) {
    if (tree[1] === true) treeCount++;
  }
}
console.log(treeCount);
