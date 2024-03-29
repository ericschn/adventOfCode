import Foundation

class Category {
  var title: String
  var translations: [CategoryTranslation] = []

  func translateRange(_ inputRange: Range<Int>) -> [Range<Int>] {
    var result: [Range<Int>] = []
    var currentRanges = [inputRange]
    var nextRanges: [Range<Int>] = []

    for translation in translations {
      for currentRange in currentRanges {
        if currentRange.overlaps(translation.range) {
          let lo = max(currentRange.lowerBound, translation.range.lowerBound)
          let hi = min(currentRange.upperBound, translation.range.upperBound)
          let overlap = lo+translation.offset..<hi+translation.offset
          result.append(overlap)
          let before = currentRange.lowerBound..<lo
          if before.count > 0 { nextRanges.append(before) }
          let after = hi..<currentRange.upperBound
          if after.count > 0 { nextRanges.append(after) }
        } else {
          nextRanges.append(currentRange)
        }
      }
      currentRanges = nextRanges
      nextRanges.removeAll()
    }
    result += currentRanges
    return result
  }

  init(title: String, numsArr: [[Int]]) {
    self.title = title
    for nums in numsArr {
      let sourceRange = nums[1]..<(nums[1] + nums[2])
      let offset = nums[0] - nums[1]
      self.translations.append(CategoryTranslation(range: sourceRange, offset: offset))
    }
  }
}

struct CategoryTranslation {
  var range: Range<Int>
  var offset: Int
}

func parseSeeds(seedsLine: String) -> [Range<Int>] {
  let seedInts = seedsLine.components(separatedBy: " ")
  .map { Int($0) ?? -1 }
  .filter { $0 != -1 }
  var ranges: [Range<Int>] = []
  for i in stride(from: 0, to: seedInts.count, by: 2) {
    ranges.append(seedInts[i]..<(seedInts[i] + seedInts[i+1]))
  }
  return ranges
}

func parseCategories(data: [String]) -> [Category] {
  var categoryArr: [Category] = []
  var currentCategory: [[Int]] = []
  var currentTitle: String = ""
  for i in 2...data.count-1 {
    if let firstChar = data[i].first {
      if firstChar.isLetter {
        currentTitle = data[i]
      } else if firstChar.isNumber {
        let nums = data[i].components(separatedBy: " ").map { Int($0) ?? -1}
        currentCategory.append(nums)
      }
    } else {
      categoryArr.append(Category(title: currentTitle, numsArr: currentCategory))
      currentCategory.removeAll()
      currentTitle = ""
    }
  }
  categoryArr.append(Category(title: currentTitle, numsArr: currentCategory))
  return categoryArr
}

let input = try String(contentsOfFile: "./input.txt")
  .components(separatedBy: "\n")
let initialSeeds: [Range<Int>] = parseSeeds(seedsLine: input[0])
let categories = parseCategories(data: input)

var resultArr: [Range<Int>] = initialSeeds
var temp: [Range<Int>] = []

for category in categories {
  for seed in resultArr {
    temp += category.translateRange(seed)
  }
  resultArr = temp
  temp.removeAll()
}

print((resultArr.sorted { $0.lowerBound < $1.lowerBound })[0].lowerBound)
