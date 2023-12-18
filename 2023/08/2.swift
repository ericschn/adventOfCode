import Foundation

func checkEndPos(posArr: [String]) -> Bool {
  for pos in posArr {
    if pos.suffix(1) != "Z" { return false }
  }
  print("they all end in Z!")
  return true
}

let input = try String(contentsOfFile: "./input.txt")
  .components(separatedBy: "\n")

let turns: [Int] = input[0].map { $0 == "L" ? 0 : 1 }
var map: [String : [String]] = [:]

for i in 2..<input.count {
  let start = String(input[i].prefix(3))
  let end = input[i].suffix(9).prefix(8).components(separatedBy: ", ")
  map[start] = end
}

// Find all starting positions that end in A
var pos: [String] = []
for (k, _) in map {
  if (k.suffix(1) == "A") {
    pos.append(k)
  }
}
print("Starting positions: \(pos)")

// Count cycles for each starting pos
var cycleCount: [Int] = []

for var p in pos {
  var c = 0
  while p.suffix(1) != "Z" {
    let turn = turns[c % turns.count]
    p = map[p]![turn]
    c += 1
    if c > 100000 { break }
  }
  print("\(c)")
  cycleCount.append(c)
}
