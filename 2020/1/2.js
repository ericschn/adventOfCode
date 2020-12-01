// 2020 Day 1 part 2

const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf-8').split("\n");

let result;

input.forEach(x => {
  input.forEach(y => {
    input.forEach(z => {
      if ((parseInt(x) + parseInt(y) + parseInt(z)) == 2020) {
        console.log(x * y * z);
      }
    })
  })
})

// console.log(input);