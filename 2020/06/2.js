// 2020 Day 6 Part 2
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8')
  .split("\n\n")
  .map(group => {
    group += "\n"
    let yesCount = 0;
    for (answer of group.slice(0, group.indexOf("\n"))) {
      if (charCount(group, answer) == charCount(group, "\n")) {
        yesCount++;
      }
    }
    return yesCount;
  })

function charCount(str, char) {
  let regex = new RegExp(char, "g");
  return (str.match(regex) || []).length;
}

console.log(input.reduce((a, b) => a + b));
