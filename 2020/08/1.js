// 2020 Day 8 Part 1
const fs = require('fs');
let input = fs.readFileSync("input.txt", "utf-8").split("\n");
let acc = 0;
let ranLines = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].slice(0,3) == "acc") {
    acc += parseInt(input[i].slice(4));
  }
  if (input[i].slice(0,3) == "jmp") {
    i += parseInt(input[i].slice(4) - 1);
    if (ranLines.includes(i)) break;
  }
  ranLines.push(i);
}

console.log(acc);
