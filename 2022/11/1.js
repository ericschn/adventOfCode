// 2022 day 11 part 1

// Hardcode in monkey data
const monkeys = [
  { items: [64, 89, 65, 95], op: 'x * 7', test: [3, 4, 1], count: 0 },
  { items: [76, 66, 74, 87, 70, 56, 51, 66], op: 'x + 5', test: [13, 7, 3], count: 0 },
  { items: [91, 60, 63], op: 'x * x', test: [2, 6, 5], count: 0 },
  { items: [92, 61, 79, 97, 79], op: 'x + 6', test: [11, 2, 6], count: 0 },
  { items: [93, 54], op: 'x * 11', test: [5, 1, 7], count: 0 },
  { items: [60, 79, 92, 69, 88, 82, 70], op: 'x + 8', test: [17, 4, 0], count: 0 },
  { items: [64, 57, 73, 89, 55, 53], op: 'x + 1', test: [19, 0, 5], count: 0 },
  { items: [62], op: 'x + 4', test: [7, 3, 2], count: 0 },
];

const numOfRounds = 20;

for (let i = 0; i < numOfRounds; i++) {
  for (let monkey of monkeys) {
    // Iterate over items and perform operation, pass, then add to count
    for (let item of monkey.items) {
      item = Math.floor(eval(monkey.op.replaceAll('x', item)) / 3);
      if (item % monkey.test[0] === 0) {
        monkeys[monkey.test[1]].items.push(item);
      } else {
        monkeys[monkey.test[2]].items.push(item);
      }
      monkey.count++;
    }
    // Monkey will always have no items after its turn
    monkey.items = [];
  }
}

let counts = monkeys.map(x => x.count).sort((a, b) => b - a);

console.log(counts);

// console.table(monkeys);
