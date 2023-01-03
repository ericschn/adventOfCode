import { readFileSync } from "fs";

let arr = readFileSync("./input.txt", "utf-8").split("\r\n");
let score = 0;

// DEBUG
// arr = `A Y
// B X
// C Z`.split('\n');

// lose: 0
// draw: 3
//  win: 6

// R: 1
// P: 2
// S: 3

for (let game of arr) {
  let op = game[0];
  let action = game[2];

  // Need to win
  if (action === "Z") {
    if (op === "A") score += 6 + 2;
    if (op === "B") score += 6 + 3;
    if (op === "C") score += 6 + 1;
  }

  // Need to draw
  if (action === "Y") {
    if (op === "A") score += 3 + 1;
    if (op === "B") score += 3 + 2;
    if (op === "C") score += 3 + 3;
  }

  // Need to lose
  if (action === "X") {
    if (op === "A") score += 0 + 3;
    if (op === "B") score += 0 + 1;
    if (op === "C") score += 0 + 2;
  }

  // console.log('score is now: ' + score);
}

console.log(score);
