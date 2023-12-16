import Foundation

let input = try String(contentsOfFile: "./input.txt")
  .components(separatedBy: "\n")
let times: [Int] = input[0].components(separatedBy: " ")
  .map { Int($0) ?? -1 }
  .filter { $0 != -1 }
let distances: [Int] = input[1].components(separatedBy: " ")
  .map { Int($0) ?? -1 }
  .filter { $0 != -1 }


var counts: [Int] = []
for (i, time) in times.enumerated() {
  print("race time: \(time)")
  var counter = 0
  for charge in 0...time {
    let dist = charge * (time - charge)
    if (dist > distances[i]) { counter += 1 }
  }
  counts.append(counter)
}

print(counts.reduce(1, *))
