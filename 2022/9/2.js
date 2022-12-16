// 2022 day 9 part 2

const fs = require('fs');
const input = fs
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((x) => [x[0], parseInt(x.substring(2))]);

let knots = Array.from({ length: 10 }, () => [0, 0]);
let result = new Set();

result.add([0, 0].toString());

for (let [dir, amt] of input) {
  if (dir === 'U') {
    for (let i = 0; i < amt; i++) {
      knots[0] = [knots[0][0], knots[0][1] + 1];
      knots = calcKnotsPos(knots);
      result.add(knots[9].toString());
    }
  } else if (dir === 'D') {
    for (let i = 0; i < amt; i++) {
      knots[0] = [knots[0][0], knots[0][1] - 1];
      knots = calcKnotsPos(knots);
      result.add(knots[9].toString());
    }
  } else if (dir === 'L') {
    for (let i = 0; i < amt; i++) {
      knots[0] = [knots[0][0] - 1, knots[0][1]];
      knots = calcKnotsPos(knots);
      result.add(knots[9].toString());
    }
  } else if (dir === 'R') {
    for (let i = 0; i < amt; i++) {
      knots[0] = [knots[0][0] + 1, knots[0][1]];
      knots = calcKnotsPos(knots);
      result.add(knots[9].toString());
    }
  }
}

function calcKnotsPos(knots) {
  for (let i = 1; i < knots.length; i++) {
    let head = knots[i - 1];
    let tail = knots[i];
    if (Math.abs(head[0] - tail[0]) === 2 && Math.abs(head[1] - tail[1]) === 2) {
      head[0] > tail[0] ? tail[0]++ : tail[0]--;
      head[1] > tail[1] ? tail[1]++ : tail[1]--;
      continue;
    }
    if (Math.abs(head[0] - tail[0]) === 2) {
      tail[1] = head[1];
      head[0] > tail[0] ? tail[0]++ : tail[0]--;
      continue;
    }
    if (Math.abs(head[1] - tail[1]) === 2) {
      tail[0] = head[0];
      head[1] > tail[1] ? tail[1]++ : tail[1]--;
      continue;
    }
  }
  return knots;
}

console.log(result.size);
