// initialize variables
let intArr = [];    // array of integers, input for problem
let sumArr = [0];   // to hold sums of intArr
let duplicate = null;
let duplicateFound = false;

// Convert string literal to array of ints
numInput.split("\n").forEach(a => {
  intArr.push(parseInt(a));
});

// Test data
// intArr = [1, -1]; // 0
// intArr = [3, 3, 4, -2, -4]; // 10
// intArr = [-6, 3, 8, 5, -6]; // 5
intArr = [7, 7, -2, -7, -4]; // 14

//console.log(sumArr);
var counter = 1;
while(!duplicateFound) {
  //console.log("sumArr at top of while: " + sumArr);
  console.log(counter);
  addToSumArray();
  if (counter > 2) break;
  counter++;
}

//console.log(intArr);
//console.log(sumArr);
console.log(duplicate);

//console.log(sumArr);

// Build sumArr
// Probably should be a pure function?
// function incrementSumArray(sumArrInput, intArrInput) {
//   let intArrLen = intArrInput.length;
//   // grab the last index of previos sumArr - can maybe use pop() and put it in sumsEndArr?
//   let prevSumArrEnd = sumArrInput[sumArrInput.length-1];
//   // run through intArr and push sums to sumArr
//   for (let i = 0; i < intArrLen; i++) {
//   }
// }

// impure function version :)
function addToSumArray() {
  let sumArrIndex = sumArr.length-1;
  //console.log("sumArr length: " + sumArr.length);
  //console.log("sumArrIndex is: " + sumArrIndex);
  for (let i = 0; i < intArr.length; i++) {
    sumArr.push(sumArr[sumArrIndex + i] + intArr[i]);

    // have to check for dupes mid list build as per instructions
    duplicate = checkDupes();
    if (duplicate != null) {
      duplicateFound = true;
      break;
    }
  }
}

function checkDupes() {
  let sumArrLen = sumArr.length;
  for (let i = 0; i < sumArrLen; i++) {
    for (let j = i+1; j < sumArrLen; j++) {
      if (sumArr[i] == sumArr[j]) {
        //console.log("duplicate found: " + sumArr[i]);
        return sumArr[i];
      }
    }
  }
}