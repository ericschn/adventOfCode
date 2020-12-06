// 2020 Day 6 Part 2
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8')
  .split("\n\n")
  .map(group => {
    group += "\n"
    // console.log("group: " + group);
    // let people = (x.match(/\n/g) || []).length + 1;
    let yesCount = 0;
    for (answer of group.slice(0, group.indexOf("\n"))) {
      if (charCount(group, answer) == charCount(group, "\n")) {
        yesCount++;
      } else {
        // console.log(answer);
        // console.log("slice: " + group.slice(0, group.indexOf("\n")));
        // console.log("charCount: " + charCount(group, answer));
        // console.log("people: " + people);
      }
    }
    return yesCount;
  })

function charCount(str, char) {
  let regex = new RegExp(char, "g");
  return (str.match(regex) || []).length;
}

// console.log(input.slice(0, 5));

console.log(input.reduce((a, b) => a + b));
