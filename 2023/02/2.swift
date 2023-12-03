import Foundation

let input = try String(contentsOfFile: "./input.txt").components(separatedBy: "\n")
let regexArr = [try Regex("(\\d+)\\sr"), try Regex("(\\d+)\\sg"), try Regex("(\\d+)\\sb")]
var sum = 0

for line in input {
  var rgbMultiply = 1
  for reg in regexArr {
    let matches = line.ranges(of: reg)
    var cur = 0
    for match in matches {
      let n = Int(line[match].dropLast(2)) ?? 0
      if (n > cur) { cur = n }
    }
    rgbMultiply *= cur
  }
  sum += rgbMultiply
}

print(sum)
