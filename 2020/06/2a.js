// 2020 Day 6 Part 2
// A more readable solution
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n\n");
let result = 0;

// Split input into groups
let groups = input.map(group => {
  return group.split("\n");
});

// Look at the first person's answers in each group
// and compare with the rest of the group
groups.forEach((group) => {
  let person1 = group[0];
  for (answer of person1) {
    let allHaveAnswer = true;
    for (person of group) {
      if (person.indexOf(answer) == -1) allHaveAnswer = false;
    }
    if (allHaveAnswer) result++;
  }
});

console.log(result);
