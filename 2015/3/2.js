const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf-8').split("");
let pos1 = [0, 0];
let pos2 = [0, 0];
let result = ["0,0"];

input = input.map(x => {
  if (x == '^') return [0, 1];
  if (x == '>') return [1, 0];
  if (x == 'v') return [0, -1];
  return [-1, 0];
})

input.forEach((x, i) => {
  if (i % 2 === 0) {
    pos1 = [pos1[0] + x[0], pos1[1] + x[1]];
    result.push(pos1.join(','));
  } else {
    pos2 = [pos2[0] + x[0], pos2[1] + x[1]];
    result.push(pos2.join(','));
  }
})

let resultSet = new Set(result);

console.log(resultSet.size);
