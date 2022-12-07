// 2022 day 6 part 1

const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8');

for (let i = 0; i < input.length - 4; i++) {
  let set = new Set();
  for (let j = 0; j < 4; j++) {
    set.add(input[i + j]);
  }
  if (set.size === 4) {
    console.log(i + 4);
    break;
  }
}
