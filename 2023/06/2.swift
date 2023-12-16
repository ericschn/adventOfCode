import Foundation

var input = try String(contentsOfFile: "./input.txt").replacingOccurrences(of: " ", with: "")
  .components(separatedBy: "\n")
let time: Int = Int(input[0].components(separatedBy: ":")[1]) ?? -1
let distance: Int = Int(input[1].components(separatedBy: ":")[1]) ?? -1


var counter = 0
for charge in 0...time {
  let dist = charge * (time - charge)
  if (dist > distance) { counter += 1 }
}

print(counter)
