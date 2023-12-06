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

// lets do this top to bottom first

// get all the seeds we need to check
let seeds: [Int] = input[0].components(separatedBy: " ")
  .map { Int($0) ?? -1 }
  .filter { $0 != -1 }

let categories = createCategories(data: input)

// for each seed, try to find in source range
// if found, get distance from range start
// get corresponding int from destination range

// continue for each category until location is found
// store location in new array

// after all seeds checked, return seed number with 
// lowest location


// DEBUG


  print(categories[0].title)
  print(categories[0].ranges)
