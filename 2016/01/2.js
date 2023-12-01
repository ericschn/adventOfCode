const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split(', ');

let visited = new Set();
let pos = [0, 0];
let dir = 0; // 0123 = north east south west

// Each instruction goes from x axis movement to y axis movement
// could maybe be simplified with a toggle back and forth?
// but what will determine positivity?

// if x = positive then -R +L
// if x = negative then +R -L
// if y = positive then +R -L
// if y = negative then -R +L

// new idea, can't I just store how many times I go
// each cardinal direction?
// yes that may work for part 1 but not part 2

// newest idea, I guess it's really just the same as
// starting the direction value at a high number to
// allow "negative" turns to still work with modulus,
// I can instead keep the direction starting at 0, adding
// 1 for right turn, 3 for left turn
// "2 wrongs don't make a right but 3 lefts do"

visited.add([0, 0].toString());

for (let i = 0; i < input.length; i++) {
  let turn = input[i][0];
  let distance = parseInt(input[i].substring(1));
  if (turn === 'L') {
    dir += 3;
  } else {
    dir++;
  }

  switch (Math.abs(dir % 4)) {
    case 0:
      pos[1] += distance;
      break;
    case 1:
      pos[0] += distance;
      break;
    case 2:
      pos[1] -= distance;
      break;
    case 3:
      pos[0] -= distance;
      break;
    default:
      console.log("SWITCH ERROR: " + dir % 4);
  }

  // console.log("Looking at pos: " + pos);
  // console.log("visited.has(pos): " + visited.has(pos));

  if (visited.has(pos.toString())) {
    console.log(pos);
  } else {
    visited.add(pos.toString());
  }

}
