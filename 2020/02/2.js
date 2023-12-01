// 2020 Day 2 Part 2
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n");
let count = 0;

input = input.map(x => {
  return x.split(/[\- ]|\: /g);
});

for (key of input) {
  let pos1 = parseInt(key[0]);
  let pos2 = parseInt(key[1]);
  let char = key[2];
  let password = key[3];

  if ((password[pos1-1] == char && password[pos2-1] != char) || 
  (password[pos1-1] != char && password[pos2-1] == char)) {
    count++;
  }
}

console.log(count);
