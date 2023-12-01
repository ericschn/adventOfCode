// 2020 Day 7 Part 1
const fs = require("fs");

let input = fs.readFileSync("test.txt", "utf-8")
  .replace(/(\sbags?)|(\.)|([0-9]\s)/g, "")
  .split("\n")
  .map(x => {
    return x.split(" contain ").map(y => {
      return y.split(", ");
    });
  });

let rules = new Map();
let result = new Set();

input.forEach(rule => {
  rules.set(rule[0][0], rule[1])
});

for (let topBag of rules.keys()) {
  let candidates = [];
  if (!isShinyGold(topBag)) {
    checkInside(topBag, candidates);
  }
}

function checkInside(topBag, candidates) {
  for (let bag of rules.get(topBag)) {
    candidates.push(topBag);
    if (isShinyGold(bag)) {
      for (let bag of candidates) {
        result.add(bag);
      }
    } else if (rules.has(bag)) {
      checkInside(bag, candidates);
    } else {
      candidates = [];
    }
  }
}

function isShinyGold(bag) {
  return bag == "shiny gold";
}

console.log(result.size);
