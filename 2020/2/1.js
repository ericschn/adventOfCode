// 2020 Day 2 Part 1
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n");
let count = 0;

input = input.map(x => {
  return x.split(/[\- ]|\: /g);
});

for (key of input) {
  let min = key[0];
  let max = key[1];
  let char = key[2];
  let password = key[3];
  let regex = new RegExp(char, "g");
  let matches = (password.match(regex)||[]).length;
  if (matches >= min && matches <= max) {
    count++;
  }
}

console.log(count);
