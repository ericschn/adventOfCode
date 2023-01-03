const fs = require("fs");

let arr = fs.readFileSync("./input.txt", "utf-8").split("\r\n");
let score = 0;

// lose: 0
// draw: 3
//  win: 6

for (let game of arr) {
  let op = game[0];
  let me = game[2];

  // Draw
  if ((op === "A" && me === "X") || (op === "B" && me === "Y") || (op === "C" && me === "Z")) {
    score += 3;
  }

  // Win
  if ((op === "A" && me === "Y") || (op === "B" && me === "Z") || (op === "C" && me === "X")) {
    score += 6;
  }

  // Points for choice
  if (me === "X") score += 1;
  if (me === "Y") score += 2;
  if (me === "Z") score += 3;
}

console.log(score);
