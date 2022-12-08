// 2021 day 2 part 1

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');
let x = 0, y = 0;

for (let dir of input) {
  if (dir[0] === 'd') y += parseInt(dir.split(' ')[1]);
  if (dir[0] === 'u') y -= parseInt(dir.split(' ')[1]);
  if (dir[0] === 'f') x += parseInt(dir.split(' ')[1]);
}

console.log(x * y);
