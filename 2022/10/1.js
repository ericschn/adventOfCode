const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8').split('\n');

let cycle = 0;
let x = 1;
let result = 0;

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
  cycle++;
  if ((cycle + 20) % 40 === 0) result += (cycle * x);
}

console.log(result);
