import Foundation

let input = try String(contentsOfFile: "./input.txt")
  .split(separator: "")
  .map { Int($0)! }

var sum = 0;
for i in 0..<input.count-1 {
  if input[i] == input[i+1] { sum += input[i] }
}

if input.first! == input.last! { sum += input.first! }

print(sum)
