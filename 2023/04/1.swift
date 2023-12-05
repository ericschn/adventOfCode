import Foundation

let input = try String(contentsOfFile: "./input.txt")
  .replacingOccurrences(of: "  ", with: " ")
  .components(separatedBy: "\n")

let cards = input
  .map { trimCardPrefix($0) }
  .map { $0.components(separatedBy: "|")
  .map { $0.trimmingCharacters(in: .whitespaces) }
  .map { $0.components(separatedBy: " ")} }

var result: Double = 0

for card in cards {
  var winCount: Double = 0
  for winningNumber in card[0] {
    if (card[1].contains(winningNumber)) {
      winCount += 1
    }
  }
  if (winCount > 0) {
    result += pow(2, winCount - 1)
  }
  winCount = 0
}

print(result)

func trimCardPrefix(_ s: String) -> String {
  if let colonIndex = s.firstIndex(of: ":") {
    return String(s[s.index(after: colonIndex)...])
  }
  return "-1"
}