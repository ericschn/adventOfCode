import Foundation

let input = try String(contentsOfFile: "./input.txt")
                      .components(separatedBy: "\n")
                      .map { Array($0) }
let height = input.count
let width = input[0].count
var sum = 0;

// iterate through the grid until finding a decimal
for (i, row) in input.enumerated() {
  var isValid = false
  var currentNumber = ""
  for (j, col) in row.enumerated() {
    if (col.isWholeNumber) {
      // print("CHECKING \(col)")
      currentNumber += String(col)
      // check surroundings for symbol

      if (i > 0) {
        // CHECK TOP ROW
        if (j > 0) {
          if (isSymbol(input[i-1][j-1])) { isValid = true }
        }
        if (isSymbol(input[i-1][j])) { isValid = true }
        if (j < width - 1) {
          if (isSymbol(input[i-1][j+1])) { isValid = true }
        }
      }

      if (j > 0) {
        // mid left
        if (isSymbol(input[i][j-1])) { isValid = true }
      }

      if (i < height - 1) {
        // CHECK BOTTOM ROW
        if (j > 0) {
          if (isSymbol(input[i+1][j-1])) { isValid = true }
        }
        if (isSymbol(input[i+1][j])) { isValid = true }
        if (j < width - 1) {
          if (isSymbol(input[i+1][j+1])) { isValid = true }
        }        
      }

      if (j < width - 1) {
        // mid right
        if (isSymbol(input[i][j+1])) { isValid = true }
      }

    } else {
      // sum curNum if valid
      if (isValid) {
        // if (currentNumber.count == 1) { print("WOOOO") }
        sum += Int(currentNumber) ?? 0
        // sum += Int(currentNumber)
      }
      // reset vars
      currentNumber = ""
      isValid = false
    }
  }
  if (isValid) {
    // if (currentNumber.count == 1) { print("WOOOO") }
    sum += Int(currentNumber) ?? 0
    // sum += Int(currentNumber)
  }
}

func isSymbol(_ c: Character) -> Bool {
  // if (!c.isWholeNumber && c != ".") {
  if (!(48...57).contains(c.asciiValue ?? 0) && c != ".") {
    return true
  }
  return false
}

// check surrounding locations for symbol, if found set valid flag
// iterate to next location (right)
// if also decimal and valid flag still false, check surrounding locations again
// if valid flag is set, only iterate and add digits if needed (max 3 digit number)
// iterate again and should be non-decimal
// add collected number to result if valid flag is set, reset valid to false
// continue

print(sum)

// should I pad the grid with . so I don't have to check if 0 4 times for every location?

// 540025