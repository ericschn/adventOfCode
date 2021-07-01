const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf-8').split(', ');

// We are at 0,0 facing north
let pos = [0,0];
let dir = 400; // 0123 = north east south west
// This doesn't work..... dang

// Loop over instructions

for (let i = 0; i < input.length; i++) {
  // Set direction
  dir = (input[i][0] === "L") ? dir - 1 : dir + 1;
  let distance = parseInt(input[i].substring(1));
  // console.log("distance = " + distance);
  // console.log("dir = " + Math.abs(dir % 4));
  switch (Math.abs(dir % 4)) {
    case 0:
      pos[1] += distance;
      break;
    case 1:
      pos[0] += distance;
      break;
    case 2:
      pos[1] -= distance;
      break;
    case 3:
      pos[0] -= distance;
      break;
    default:
      console.log("SWITCH ERROR: " + dir % 4);
  }
  // console.log(pos);
}

console.log(pos);
