import Foundation

func extrapolate(nums:[[Int]]) -> Int {
  var history: [[Int]] = nums
  var historyLine: [Int] = []
  for i in 0..<nums.last!.count-1 {
    historyLine.append(nums.last![i+1] - nums.last![i])
  }
  
  if historyLine.allSatisfy({ (n) in n == historyLine.first! }) {
    var sum = historyLine.first!
    for h in history.reversed() {
      sum = h.first! - sum
    }
    return sum
  }
  history.append(historyLine)
  return extrapolate(nums: history)
}

let input: [[Int]] = try String(contentsOfFile: "./input.txt")
  .components(separatedBy: "\n")
  .map { $0.components(separatedBy: " ").map { Int($0)! } }

var sums: [Int] = []
for line in input {
  sums.append(extrapolate(nums: [line]))
}

print(sums.reduce(0, +))
