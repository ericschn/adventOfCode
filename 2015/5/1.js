// 2015 Day 5 Part 1

// Wanted to add to string methods for some reason
String.prototype.includesArr = function(arr) {
  for (let str of arr) {
    if (this.includes(str)) return true;
  }
  return false;
}

String.prototype.vowelCount = function(y = false) {
  let vowels = "aeiou";
  if (y) vowels = "aeiouy";
  let vowelCount = 0;
  for (let vowel of vowels) {
    for (let chr of this) {
      if (vowel == chr) vowelCount++;
    }
  }
  return vowelCount;
}

String.prototype.doubleLetter = function() {
  for (let i = 0; i < this.length - 1; i++) {
    if (this[i] == this[i+1]) {
      return true;
    }
  }
  return false;
}

const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n");
const badStrings = ["ab", "cd", "pq", "xy"];
let result = 0;

for (let str of input) {
  // Check for bad strings
  if (str.includesArr(badStrings) === true) {
    continue;
  }
  // Check that it has 3+ vowels
  if (str.vowelCount() < 3) {
    continue;
  }
  // Check for double letter
  if (!str.doubleLetter()) {
    continue;
  }

  result++;
}

console.log(result);
