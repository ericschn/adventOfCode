// 2020 Day 1 Part 1
const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf-8').split("\n");

let result = findSums(input);

console.log(result);

/** Looks in the input array for 2 integers
 * with the sum of 2020 and returns the product
 * of those 2 integers.
 * 
 * @param {number[]} inputArr 
 */
function findSums(inputArr) {
  for (let x of inputArr) {
    let diff = 2020 - parseInt(x);
    for (let y of inputArr) {
      if (diff == y) {
        return x * y;
      }
    }
  }
  return -1;
}
