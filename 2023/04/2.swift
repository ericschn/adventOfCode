import Foundation

let input = try String(contentsOfFile: "./input.txt")
  .replacingOccurrences(of: "  ", with: " ")
  .components(separatedBy: "\n")

var cards: [Card] = []

for line in input {
  cards.append(Card(line))
}

for (i, card) in cards.enumerated() {
  if (card.wins > 0) {
    for j in 1...card.wins {
      cards[i + j].qty += card.qty
    }
  }
}

let result: Int = cards.reduce(0) { $0 + $1.qty }
print(result)

class Card {
  var qty: Int = 1
  var wins: Int = 0

  init(_ s: String) {
    var lineString = ""
    if let colonIndex = s.firstIndex(of: ":") {
      lineString = String(s[s.index(colonIndex, offsetBy: 2)...])
        .trimmingCharacters(in: .whitespaces)
    }
    let split = lineString.components(separatedBy: " | ")
    let winningNums = split[0].components(separatedBy: " ")
    let nums = split[1].components(separatedBy: " ")
    for winningNum in winningNums {
      if (nums.contains(winningNum)) {
        self.wins += 1
      }
    }
  }
  
}
