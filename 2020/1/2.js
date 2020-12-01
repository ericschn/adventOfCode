// 2020 Day 1 part 2

// Timing
const { performance } = require('perf_hooks');
const startTime = performance.now();

const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf-8').split("\n");

let result = find3Sums(input);

console.log(result);

/** Looks in the input array for 3 integers
 * with the sum of 2020 and returns the product
 * of those 3 integers.
 * 
 * @param {number[]} inputArr 
 */
function find3Sums(inputArr) {
  for (let x of inputArr) {
    for (let y of inputArr) {
      for (let z of inputArr) {
        if ((parseInt(x) + parseInt(y) + parseInt(z)) == 2020) {
          return (x * y * z);
        }
      }
    }
  }
  return -1;
}

// Timing
console.log("Completed in: " + Math.floor(performance.now() - startTime) + "ms");
