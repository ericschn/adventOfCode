// 2020 Day 8 Part 2
const fs = require('fs');
let input = fs.readFileSync("input.txt", "utf-8").split("\n");
let changedInput = input;
let acc = 0;
let ranLines = [];
let passes = true;

for (let i = 0; i < input.length; i++) {
  acc = 0;
  ranLines = [];
  changedInput = input;
  passes = true;

  if (input[i].slice(0,3) == "nop") {
    changedInput[i] = "jmp" + input[i].slice(4);
  }else if (input[i].slice(0,3) == "jmp") {
    i += parseInt(input[i].slice(4) - 1);
    changedInput[i] = "nop" + input[i].slice(4);
  }

  for (let j = 0; j < input.length; j++) {
    if (input[j].slice(0,3) == "acc") {
      acc += parseInt(input[j].slice(4));
    }

    if (input[j].slice(0,3) == "jmp") {
      j += parseInt(input[j].slice(4) - 1);
      if (ranLines.includes(j) || j < 0 || j >= input.length) {
        passes = false;
        break;
      }
      if (j + 1 == input.length-1) {
        console.log("PASSES: " + acc);
      }
    }

    ranLines.push(j);

  }
  if (passes) console.log(acc);
}
