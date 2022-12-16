// 2022 day 9 part 1

const fs = require('fs');
const input = fs
  .readFileSync('input.txt', 'utf-8')
  .split('\n')
  .map((x) => [x[0], parseInt(x.substring(2))]);

let result = new Set();
let headPos = [0, 0];
let tailPos = [0, 0];
result.add(tailPos.toString());

for (let [dir, amt] of input) {
  if (dir === 'U') {
    for (let i = 0; i < amt; i++) {
      headPos = [headPos[0], headPos[1] + 1];
      tailPos = calcTailPos(headPos, tailPos);
      result.add(tailPos.toString());
    }
  } else if (dir === 'D') {
    for (let i = 0; i < amt; i++) {
      headPos = [headPos[0], headPos[1] - 1];
      tailPos = calcTailPos(headPos, tailPos);
      result.add(tailPos.toString());
    }
  } else if (dir === 'L') {
    for (let i = 0; i < amt; i++) {
      headPos = [headPos[0] - 1, headPos[1]];
      tailPos = calcTailPos(headPos, tailPos);
      result.add(tailPos.toString());
    }
  } else if (dir === 'R') {
    for (let i = 0; i < amt; i++) {
      headPos = [headPos[0] + 1, headPos[1]];
      tailPos = calcTailPos(headPos, tailPos);
      result.add(tailPos.toString());
    }
  }
}

function calcTailPos(head, tail) {
  if (Math.abs(head[0] - tail[0]) === 2) {
    tail[1] = head[1];
    head[0] > tail[0] ? tail[0]++ : tail[0]--;
  }
  if (Math.abs(head[1] - tail[1]) === 2) {
    tail[0] = head[0];
    head[1] > tail[1] ? tail[1]++ : tail[1]--;
  }

  return tail;
}

console.log(result.size);
