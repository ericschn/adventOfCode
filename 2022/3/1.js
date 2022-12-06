const fs = require("fs");
let arr = fs.readFileSync("input.txt", 'utf-8').split("\n");

let result = 0;
let alpha = ".abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let bag of arr) {
  let dup;

  let left = bag.slice(0, bag.length / 2);
  let right = bag.slice(bag.length / 2);

  for (let char of left) {
    if (right.includes(char)) {
      dup = char;
      break;
    }
  }

  result += alpha.indexOf(dup);

}

console.log(result);
