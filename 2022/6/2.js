// 2022 day 6 part 2

const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8');

for (let i = 0; i < input.length - 14; i++) {
  let set = new Set();
  for (let j = 0; j < 14; j++) {
    set.add(input[i + j]);
  }
  if (set.size === 14) {
    console.log(i + 14);
    break;
  }
}
