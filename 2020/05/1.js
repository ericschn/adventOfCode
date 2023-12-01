// 2020 Day 5 Part 1 and 2
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8')
.replace(/./g, c => (c == "F" || c == "L") ? 0 : 1).split("\n");

let seatIds = []

for (seat of input) {
  let row = parseInt(seat.slice(0, 7), 2);
  let col = parseInt(seat.slice(7, 10), 2);
  seatIds.push(row * 8 + col);
}

seatIds = seatIds.sort((a, b) => a - b)

console.log(seatIds[seatIds.length - 1]);

for (let i = 0; i < seatIds.length; i++) {
  if (seatIds[i] + 2 === seatIds[i + 1]) {
    console.log(seatIds[i] + 1);
  }
}
