// 2022 day 6 part 1

const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8');

for (let i = 0; i < input.length; i++) {
  if (
    input[i] !== input[i + 1] &&
    input[i] !== input[i + 2] &&
    input[i] !== input[i + 3] &&
    input[i + 1] !== input[i + 2] &&
    input[i + 1] !== input[i + 3] &&
    input[i + 2] !== input[i + 3]
  ) {
    console.log(i + 4);
    console.log(input[i] + input[i + 1] + input[i + 2] + input[i + 3]);
    break;
  }
}
