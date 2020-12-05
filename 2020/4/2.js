// 2020 Day 4 Part 2
const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split("\n\n");

class Passport {
  constructor(byr, iyr, eyr, hgt, hcl, ecl, pid) {
    this.byr = parseInt(byr);
    this.iyr = parseInt(iyr);
    this.eyr = parseInt(eyr);
    this.hgt = hgt;
    this.hcl = hcl;
    this.ecl = ecl;
    this.pid = pid;
  }
}

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"];
const eyeColors = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]
let validPassports = 0

let passports = input.map(passport => {
  if (hasCorrectFields(passport)) {
    return passport.split(/\s/).map(keyValue => {
      return keyValue.split(":")
    });
  }
}).filter(x => x !== undefined).map(y => {
  return new Map(y);
}).map(passportMap => {
  return new Passport(
    passportMap.get("byr"),
    passportMap.get("iyr"),
    passportMap.get("eyr"),
    passportMap.get("hgt"),
    passportMap.get("hcl"),
    passportMap.get("ecl"),
    passportMap.get("pid")
  );
});

console.log(passports.slice(0, 5));

for (passport of passports) {
  if (passportIsValid(passport)) validPassports++;
}

console.log(validPassports);

// Functions

function hasCorrectFields(passport) {
  let valid = true;
  for (field of fields) {
    if (!passport.includes(field)) valid = false;
  }
  return valid;
}

function passportIsValid(p) {
  return byrValid(p.byr) && iyrValid(p.iyr) &&
  eyrValid(p.eyr) && hgtValid(p.hgt) &&
  hclValid(p.hcl) && eclValid(p.ecl) &&
  pidValid(p.pid);
}

function byrValid(byr) {
  return byr >= 1920 && byr <= 2002;
}

function iyrValid(iyr) {
  return iyr >=2010 && iyr <= 2020
}

function eyrValid(eyr) {
  return eyr >= 2020 && eyr <= 2030;
}

function hgtValid(hgt) {
  let hgtNum = hgt.slice(0, -2);
  let hgtUnit = hgt.slice(-2);
  if (hgtUnit == "cm") {
    return hgtNum >= 150 && hgtNum <= 193;
  } else {
    return hgtNum >= 59 && hgtNum <= 76;
  }
}

function hclValid(hcl) {
  return /^#[0-9A-F]{6}$/i.test(hcl);
}

function eclValid(ecl) {
  return eyeColors.includes(ecl);
}

function pidValid(pid) {
  return /^[0-9]{9}$/.test(pid);
}
