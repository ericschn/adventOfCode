import Foundation

let input = try String(contentsOfFile: "./input.txt")
  .split(separator: "\n")
  .map { $0.split(separator: "\t").map { Int($0)! }.sorted(by: < ) }

print(input.map { $0.last! - $0.first! }.reduce(0, +))
