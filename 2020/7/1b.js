// 2020 Day 7 Part 1
const fs = require("fs");

let input = fs.readFileSync("input.txt", "utf-8")
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

// Get initial top level bags that can
// contain a shiny gold bag
for (let [key, value] of rules) {
  if (value.includes("shiny gold")) {
    result.add(key);
  }
}

while (true) {
  let currentResultSize = result.size;
  for (let [key, value] of rules) {
    for (bag of result) {
      if (value.includes(bag)) {
        result.add(key);
      }
    }
  }
  if (currentResultSize === result.size) break;
}

console.log(result.size);
