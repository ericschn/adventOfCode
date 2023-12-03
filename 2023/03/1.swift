import Foundation

let input = try String(contentsOfFile: "./input.txt")
                      .components(separatedBy: "\n")
                      .map { Array($0) }
let height = input.count
let width = input[0].count
var sum = 0;

for (i, row) in input.enumerated() {
  var isValid = false
  var currentNumber = ""
  for (j, col) in row.enumerated() {
    if (col.isWholeNumber) {
      currentNumber += String(col)
      if (i > 0) {
        if (j > 0) {
          if (isSymbol(input[i-1][j-1])) { isValid = true }
        }
        if (isSymbol(input[i-1][j])) { isValid = true }
        if (j < width - 1) {
          if (isSymbol(input[i-1][j+1])) { isValid = true }
        }
      }

      if (j > 0) {
        if (isSymbol(input[i][j-1])) { isValid = true }
      }

      if (i < height - 1) {
        if (j > 0) {
          if (isSymbol(input[i+1][j-1])) { isValid = true }
        }
        if (isSymbol(input[i+1][j])) { isValid = true }
        if (j < width - 1) {
          if (isSymbol(input[i+1][j+1])) { isValid = true }
        }        
      }

      if (j < width - 1) {
        if (isSymbol(input[i][j+1])) { isValid = true }
      }

    } else {
      if (isValid) {
        sum += Int(currentNumber) ?? 0
      }
      currentNumber = ""
      isValid = false
    }
  }
  if (isValid) {
    sum += Int(currentNumber) ?? 0
  }
}

func isSymbol(_ c: Character) -> Bool {
  return (!c.isWholeNumber && c != ".")
}

print(sum)
