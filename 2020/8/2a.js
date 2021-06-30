// 2020 Day 8 Part 2
const fs = require('fs');
let input = fs.readFileSync("input.txt", "utf-8").split("\n");
let changedInput = input;
let acc = 0;
let ranLines = [];
let passes = true;

// Loop over input lines, changing current line
// from jmp to nop or vice versa and saving
// the result in changedInput variable
for (let i = 0; i < input.length; i++) {

}

// Loop over changedInput lines and pass if
// next line to be ran == changedInput.length
// or fail if it gets caught in a loop or goes
// out of bounds
