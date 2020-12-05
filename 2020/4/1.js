// 2020 Day 4 Part 1
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n\n");

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
let validPassports = 0

// Naive solution just checking for the fields
for (passport of input) {
  let valid = true;
  for (field of fields) {
    if (!passport.includes(field)) valid = false;;
  }

  if (valid) {
    validPassports++;
  }
}

console.log(validPassports);
