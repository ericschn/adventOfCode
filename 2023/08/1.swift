import Foundation

let input = try String(contentsOfFile: "./input.txt")
  .components(separatedBy: "\n")

let turns: [Int] = input[0].map { $0 == "L" ? 0 : 1 }
var map: [String : [String]] = [:]

for i in 2..<input.count {
  let start = String(input[i].prefix(3))
  let end = input[i].suffix(9).prefix(8).components(separatedBy: ", ")
  map[start] = end
}

var counter = 0
var pos = "AAA"

while pos != "ZZZ" {
  let turn = turns[counter % turns.count]
  pos = map[pos]![turn]
  counter += 1
  if counter > 1000000 { break }
}

print(counter)
