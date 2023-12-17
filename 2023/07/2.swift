import Foundation

class Hand {
  let cards: String
  let bet: Int
  var sortString: String


  init(cards: String, bet: String) {
    self.cards = cards
    self.bet = Int(bet) ?? -1
    self.sortString = cards
    for pair in alphaMorph {
      self.sortString = self.sortString.replacingOccurrences(of: pair.key, with: pair.value)
    }
  }
}

func getHandType(hand: String) -> Int {
  // returns Int of hand type, 0-6
  var cardCount: [Character : Int] = [:]
  for card in hand {
    if cardCount.keys.contains(card) {
      cardCount[card] = cardCount[card]! + 1
    } else {
      cardCount[card] = 1
    }
  }

  // has joker
  if cardCount.keys.contains("J") {
    let jokers = cardCount["J"]!
    if jokers == 1 {
      if cardCount.count == 3 {
        if cardCount.values.contains(2) { return 4}
        if cardCount.values.contains(3) { return 5}
      }
    }
    if cardCount.count == 3 { return 5 }
    if cardCount.count == 4 { return 3 }
    if cardCount.count == 5 { return 1 }
    return 6
  }

  if cardCount.values.contains(5) {
    // 5 of a kind
    return 6
  }
  if cardCount.values.contains(4) {
    // 4 of a kind
    return 5
  }
  if cardCount.values.contains(2) && cardCount.values.contains(3) {
    // full house
    return 4
  }
  if cardCount.values.contains(3) && cardCount.count == 3 {
    // three of a kind
    return 3
  }
  if cardCount.values.contains(2) && cardCount.count == 3 {
    // two pair
    return 2
  }
  if cardCount.values.contains(2) && cardCount.count == 4 {
    // pair
    return 1
  }
  return 0
}

let alphaMorph = ["2": "a", "3": "b", "4": "c", "5": "d", "6": "e", "7": "f",
  "8": "g", "9": "h", "T": "i", "J": "J", "Q": "k", "K": "l", "A": "m"]

let input = try String(contentsOfFile: "./input.txt")
  .components(separatedBy: "\n")

var hands: [[Hand]] = Array(repeating: [Hand](), count: 7)
for line in input {
  let splitLine = line.components(separatedBy: " ")
  let handType = getHandType(hand: splitLine[0])
  hands[handType].append(Hand(cards: splitLine[0], bet: splitLine[1]))
}

var rankedHands: [Hand] = []
for handArr in hands {
  let sortedHand = handArr.sorted { $0.sortString < $1.sortString }
  rankedHands += sortedHand
}

var sum = 0
for (i, hand) in rankedHands.enumerated() {
  sum += hand.bet * (i + 1)
}

print(sum)
