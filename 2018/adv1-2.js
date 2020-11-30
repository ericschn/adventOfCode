
// console.log(numInput);

const strArr = numInput.split("\n");
let intArr = [];

let sumsArr = [0];
let sumsArrEnding = [0, 561];

// building int array
strArr.forEach(a => {
  intArr.push(parseInt(a));
});

// DEBUG
// intArr = [7, 7, -2, -7, -4];

// building sums array
let counter = 0;
while(counter < 10){
  buildSumsArr();
  console.log("looping back" + counter)
  counter++;
}

console.log(returnDup());


// returning first duplicate int
// console.log(returnFirstDup(sumsArr));

function returnFirstDup(arrayToCheck) {
  let arrLen = arrayToCheck.length;
  // console.log("sumsArr as is in returnFirstDup " + sumsArr);
  for (let i = 0; i < arrLen; i++) {
    console.log("returnFirstDup i loop " + i);
    for (let j = i+1; j < arrLen; j++) {
      // console.log("returnFirstDup j loop " + j);
      if (arrayToCheck[i] == sumsArrEnding[j]) {
        console.log("returnFirstDup if statement triggered");
        return arrayToCheck[i];
      }
    }
  }
  return null;
}

function returnDup() {
  for (let i = 0; i < sumsArrEnding.length; i++){
    for (let j = i+1; j < sumsArr.length; j++){
      if (sumsArrEnding[i] == sumsArr[j]) return sumsArrEnding[i];
    }
  }
}

function buildSumsArr() {
  let intArrLen = intArr.length;
  let sumsIndex = sumsArr.length - 1;
  for (let i = 0; i < intArrLen; i++) {
    sumsArr.push(sumsArr[sumsIndex] + intArr[i]);
    sumsIndex++;
    // this is wrong now
  }
}

// console.log(intArr);
// console.log("first duplicate is: " + returnFirstDup(intArr));
console.log(sumsArr);
console.log(sumsArrEnding);
