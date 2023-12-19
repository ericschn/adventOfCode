import Foundation

var input = try String(contentsOfFile: "./input.txt")
  .split(separator: "")
  .map { Int($0)! }

let count = input.count
input += input

var sum = 0;
for i in 0..<count {
  if input[i] == input[i+count/2] { sum += input[i] }
}

print(sum)
