// 2022 day 10 part 2

const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

let cycle = 0;
let x = 1;
let result = [];

for (let line of input) {
  if (line[0] === 'n') {
    checkCycle();
  } else {
    checkCycle();
    checkCycle();
    x += parseInt(line.substring(5));
  }
}

function checkCycle() {
  if (x > 40) console.log(x);
  if (Math.abs(cycle % 40 - x) < 2) {
    result.push('#');
  } else {
    result.push('.');
  }
  cycle++;
}

console.log(result.join('').match(/.{40}/g));
