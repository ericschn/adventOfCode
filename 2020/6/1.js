// 2020 Day 6 Part 1
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8')
  .split("\n\n")
  .map(x => {
    return x.replace(/\n/g, "")
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .length;
  }).reduce((a, b) => a + b);

console.log(input);
