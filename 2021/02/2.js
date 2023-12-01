// 2021 day 2 part 2

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');
let x = 0,
  aim = 0,
  y = 0;

for (let dir of input) {
  if (dir[0] === 'd') aim += parseInt(dir.split(' ')[1]);
  if (dir[0] === 'u') aim -= parseInt(dir.split(' ')[1]);
  if (dir[0] === 'f') {
    x += parseInt(dir.split(' ')[1]);
    y += parseInt(dir.split(' ')[1] * aim);
  }
}

console.log(x * y);
