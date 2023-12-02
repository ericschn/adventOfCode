import Foundation

let input = try String(contentsOfFile: "./input.txt").components(separatedBy: "\n")
let reg = try Regex("([2-9]\\d|1[3-9])\\sr|([2-9]\\d|1[4-9])\\sg|([2-9]\\d|1[5-9])\\sb")
var rgb = [0, 0, 0];
var sum = 0;
for (i, line) in input.enumerated() {
  // find largest red value in line
  // then green
  // then blue
  // multiply them together
  // add value to sum
}
print(sum)
