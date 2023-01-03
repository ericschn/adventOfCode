// 2022 Day 8 part 2

const fs = require('fs');
const treeGrid = fs
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((x) => {
    return x.split('').map((x) => parseInt(x));
  });

let topScore = 0;

for (let i = 0; i < treeGrid.length; i++) {
  for (let j = 0; j < treeGrid[0].length; j++) {
    let curScore = treeScore(i, j);
    if (topScore < curScore) topScore = curScore;
  }
}

console.log(topScore);

function treeScore(y, x) {
  // Trees on edges have 0 score
  if (y === 0 || x === 0 || y === treeGrid.length - 1 || x === treeGrid[0].length - 1) {
    return 0;
  }
  let tree = treeGrid[y][x];
  let scores = [0, 0, 0, 0];

  // Check East
  for (let i = x; i < treeGrid[y].length - 1; i++) {
    scores[0]++;
    if (tree <= treeGrid[y][i + 1]) break;
  }

  // Check South
  for (let i = y; i < treeGrid.length - 1; i++) {
    scores[1]++;
    if (tree <= treeGrid[i + 1][x]) break;
  }

  // Check West
  for (let i = x; i > 0; i--) {
    scores[2]++;
    if (tree <= treeGrid[y][i - 1]) break;
  }

    // Check North
    for (let i = y; i > 0; i--) {
      scores[3]++;
      if (tree <= treeGrid[i - 1][x]) break;
    }

  return scores.reduce((a, b) => a * b);
}
