const fs = require("fs");
const input = fs.readFileSync("input.txt", "utf-8");
const groupString = input.match(/\w+\n\w+\n\w+/g);
const groups = [];
for (let g of groupString) {
  groups.push(g.split('\n'));
}

let result = 0;
const alpha = ".abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (let group of groups) {
  for (let char of group[0]) {
    if (group[1].includes(char) && group[2].includes(char)) {
      result += alpha.indexOf(char);
      break;
    }
  }
}

console.log(result);

// for (let group of groups) {
//   for (let i = 1; i < alpha.length; i++) {
//     if (containsThree(group, alpha[i])) {
//       result += i;
//       break;
//     }
//   }

//   result += alpha.indexOf(dup);
// }

// function containsThree(g, a) {
//   let count = 0;
//   for (let c of g) {
//     if (c === a) count++;
//   }
//   if (count === 3) console.log("found 3 of " + a);
//   return count === 3;
// }

// console.log(result);
