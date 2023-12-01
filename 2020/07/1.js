// 2020 Day 7 Part 1
const fs = require("fs");

let input = fs.readFileSync("test.txt", "utf-8")
  .replace(/\sbags?/g, "")
  .split("\n");

let rules = input.map(line => {
  return line.split(" contain ").map(str => {
    return str.split(", ");
  });
});

let canContainMyBag = []
let count = 0;

let enders = [];
let containers = [];
let containers2 = [];
let shinyGold = [];

rules.forEach(rule => {
  rule[1].forEach(bag => {
    if (checkBag(bag)) {
      count++;
    }
  });
});

function checkBag(bag) {
  // console.log("bag: " + bag);
  if (bag.includes("shiny gold")) {
    // console.log(bag.slice(2));
    return true;
  } else {
    rules.forEach(rule => {
      // console.log(rule[0][0]);
      // console.log(bag[0].slice(2));
      if (rule[0][0].includes(bag.slice(2))) {
        rule[1].forEach(nestedBag => {
          // console.log("nestedBag: " + nestedBag);
          if (checkBag(nestedBag)) {
            count++
          }
        });
      }
    });
  }
  return false;
}

console.log(count);



// rules.forEach((rule, index) => {
//   if (rule[0][0].includes("shiny gold")) {
//     shinyGold.push(rule);
//   }
//   if (rule[1][0].includes("no other")) {
//     enders.push(rule);
//   }
//   rule[1].forEach(bag => {
//     if (bag.includes("shiny gold")) {
//       containers.push(rule[0][0]);
//     }
//   });
// });

// containers.forEach(container => {
//   rules.forEach(rule => {
//     rule[1].forEach(bag => {
//       if (bag.includes(container)) {
//         containers2.push(rule[0][0]);
//       }
//     })
//   });
// });

// console.log(shinyGold);
// console.log(containers2);
