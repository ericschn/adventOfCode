// 2015 Day 4 Part 1 and 2
const crypto = require('crypto');

const input = "iwrupvqb";

let hash = "";
let start =   1000000;
let end   =  10000000;
// Look for how many leading zeroes?
let zeroes = "000000"

for (let i = start; i < end; i++) {
  hash = crypto.createHash('md5').update(input + i).digest("hex");
  // console.log(hash.slice(0, zeroes.length));
  if (hash.slice(0, zeroes.length) == zeroes) {
    console.log(i);
    break;
  }
}

console.log(`Attempted ${end - start} integers, from ${start} to ${end}`);
