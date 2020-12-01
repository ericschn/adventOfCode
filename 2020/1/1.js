// 2020 Day 1

const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf-8').split("\n");

let result;

input.forEach(x => {
  let sum = 2020 - parseInt(x);
  input.forEach(y => {
    if (sum == y) console.log(x * y);
  })
  if (input.indexOf(sum) > -1) {
    // console.log(sum * x);
  }
})

// console.log(input);