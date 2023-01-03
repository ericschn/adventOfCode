// 2022 Day 4 Part 2

const fs = require("fs");

const input = fs.readFileSync("input.txt", "utf-8").split("\n");
let arr = [];

for (let line of input) {
  let lineArr = line.split(",");
  arr.push([
    lineArr[0].split("-").map((x) => parseInt(x)),
    lineArr[1].split("-").map((x) => parseInt(x)),
  ]);
}

let result = 0;

for (let pairs of arr) {
  if (
    (pairs[0][0] <= pairs[1][0] && pairs[0][1] >= pairs[1][1]) ||
    (pairs[0][0] >= pairs[1][0] && pairs[0][1] <= pairs[1][1])
  ) {
    result++;
    continue;
  }

  if (
    (pairs[0][0] <= pairs[1][0] && pairs[0][1] >= pairs[1][0]) ||
    (pairs[1][0] <= pairs[0][0] && pairs[1][1] >= pairs[0][0])
  ) {
    result++;
    continue;
  }
}

console.log(result);
