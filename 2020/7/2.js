// 2020 Day 7 Part 2
const fs = require("fs");

let input = fs.readFileSync("test.txt", "utf-8")
  .replace(/(\sbags?)|(\.)/g, "")
  .split("\n")
  .map(x => {
    return x.split(" contain ").map(y => {
      return y.split(", ");
    });
  });

let rules = new Map();
let result = 0;

input.forEach(rule => {
  rules.set(rule[0][0], rule[1].map(x => {
    return [x.slice(2), x.slice(0,1)];
  }));
});

let shinyGold = rules.get("shiny gold");

for (let bag of shinyGold) {
  let multipliers = [];
  if (bag[0] != " other") {
    multipliers.push(bag[1]);
    if (rules.has(bag[0])) {
      digDown(rules.get(bag[0]), multipliers);
    }
  }
  result += multipliers.reduce((a, b) => a * b);
}

function digDown(bags, multipliers) {
  for (let bag of bags) {
    if (bag[0] != " other") {
      multipliers.push(bag[1]);
      if (rules.has(bag[0])) {
        digDown(rules.get(bag[0]), multipliers);
      }
    } else {
      // wahh
    }
  }
}

console.log(result);

console.log(rules);