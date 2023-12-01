import Foundation

let input = try String(contentsOfFile: "./input.txt").components(separatedBy: "\n")
var sum = 0;
for line in input {
    sum += concatDigits(line)
}
print(sum)

func concatDigits(_ s: String) -> Int {
    if let firstDigitIndex = s.firstIndex(where: { n in n.isNumber }) {
        let firstDigit = s[firstDigitIndex]
        let lastDigitIndex = s.lastIndex(where: { n in n.isNumber })!
        let lastDigit = s[lastDigitIndex]
        return Int("\(firstDigit)\(lastDigit)") ?? 0
    } else {
        return 0
    }
}
