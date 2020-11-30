const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf-8').split("");
let pos = [0, 0];
// Want to use a set so no duplicates, but we might 
// need to count the dupes for part 2... so I'll 
// use an array then convert to a set later.
let result = ["0,0"];

input = input.map(x => {
  if (x == '^') return [0, 1];
  if (x == '>') return [1, 0];
  if (x == 'v') return [0, -1];
  return [-1, 0];
})

input.forEach(x => {
  pos = [pos[0] + x[0], pos[1] + x[1]];
  result.push(pos.join(','));
})

let resultSet = new Set(result);

console.log(resultSet.size);
