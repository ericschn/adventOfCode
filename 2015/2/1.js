const fs = require('fs');

const input = fs.readFileSync('input.txt', 'utf-8');

let paperNeeded = 0;
let ribbonNeeded = 0;

let boxList = input.split('\n').map(dimensions => {
  return dimensions.split('x').map(str => {
    return parseInt(str);
  }).sort((a,b) => a - b);
});

boxList.forEach(x => {
  paperNeeded += parseInt(getNeededPaper(x));
  ribbonNeeded += parseInt(getNeededRibbon(x));
})

function getNeededPaper(d) {
  return (2 * (d[0] * d[1] + d[1] * d[2] + d[0] * d[2])) + (d[0] * d[1])
}

function getNeededRibbon(d) {
  return (2 * (d[0] + d[1])) + (d[0] * d[1] * d[2]);
}

console.log(paperNeeded);
console.log(ribbonNeeded);

console.log(getNeededRibbon([2, 3, 4]));
console.log(getNeededRibbon([1, 1, 10]));
