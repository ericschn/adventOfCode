import Foundation

class Category {
  var title: String
  var ranges: [(ClosedRange<Int>, ClosedRange<Int>)] = [(0...0, 0...0)]

  init(title: String, numsArr: [[Int]]) {
    self.title = title
    for nums in numsArr {
      let sourceRange = nums[1]...(nums[1] + nums[2])
      let destinationRange = nums[0]...(nums[0] + nums[2])
      self.ranges.append((sourceRange, destinationRange))
    }
  }
}

func createCategories(data: [String]) -> [Category] {
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
let seeds: [Int] = input[0].components(separatedBy: " ")
  .map { Int($0) ?? -1 }
  .filter { $0 != -1 }
let categories = createCategories(data: input)
var seedLocations: [Int] = []

for seed in seeds {
  var currentNum = -1;
  for category in categories {
    if currentNum == -1 { currentNum = seed }
    for range in category.ranges {
      if range.0 ~= currentNum {
        let distance = range.0.lowerBound.distance(to: currentNum)
        currentNum = range.1.lowerBound.advanced(by: distance)
        break
      }
    }
  }
  seedLocations.append(currentNum)
}

print(seedLocations.min() ?? -1)
