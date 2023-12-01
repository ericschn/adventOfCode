const fs = require('fs');

let inputArr = fs.readFileSync('input.txt', 'utf-8').split("");

let counter = 0;

inputArr.forEach((x, i) => {
  x == "(" ? counter += 1 : counter -= 1;
  if (counter == -1) console.log(i + 1);
});
