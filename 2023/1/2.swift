import Foundation

let input = try String(contentsOfFile: "./input.txt").components(separatedBy: "\n")
let wordNums = ["one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9]

var sum = 0;
for line in input {
  sum += concatDigits(line)
}
print(sum)

func concatDigits(_ s: String) -> Int {
  let a = getFirstNumber(s)
  let b = getLastNumber(s)
  return a * 10 + b
}

func getFirstNumber(_ s: String) -> Int {
  var digit: Int = -1

  if let lastDigitIndex = s.firstIndex(where: { n in n.isNumber }) {
    digit = s[lastDigitIndex].wholeNumberValue!
    let substr = s.prefix(upTo: lastDigitIndex)
    if substr.count < 3 {
      return digit
    }

    var wordIndexes: [(String, Int)] = []
    for word in wordNums
    {
      if let lastWordRange = substr.range(of: word.key) {
        let indexInt = substr.distance(from: substr.startIndex, to: lastWordRange.lowerBound)
        wordIndexes.append((word.key, indexInt))
      }
    }

    if wordIndexes.count > 0 {
      wordIndexes.sort {$0.1 < $1.1}
      digit = wordNums[wordIndexes[0].0]!
    }
  }
  return digit
}

func getLastNumber(_ s: String) -> Int {
  var digit: Int = -1

  if let lastDigitIndex = s.lastIndex(where: { n in n.isNumber }) {
    digit = s[lastDigitIndex].wholeNumberValue!
    let substr = s.suffix(from: lastDigitIndex)
    if substr.count < 3 {
      return digit
    }

    var wordIndexes: [(String, Int)] = []
    for word in wordNums
    {
      if let lastWordRange = substr.range(of: word.key, options: .backwards) {
        let indexInt = substr.distance(from: substr.startIndex, to: lastWordRange.lowerBound)
        wordIndexes.append((word.key, indexInt))
      }
    }

    if wordIndexes.count > 0 {
      wordIndexes.sort {$0.1 > $1.1}
      digit = wordNums[wordIndexes[0].0]!
    }
  }
  return digit
}
