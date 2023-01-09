// 2022 day 11 part 2

// Hardcode in monkey data
const monkeys = [
  { items: [64n, 89n, 65n, 95n], op: 'x * 7n', test: [3n, 4, 1], count: 0 },
  { items: [76n, 66n, 74n, 87n, 70n, 56n, 51n, 66n], op: 'x + 5n', test: [13n, 7, 3], count: 0 },
  { items: [91n, 60n, 63n], op: 'x * x', test: [2n, 6, 5], count: 0 },
  { items: [92n, 61n, 79n, 97n, 79n], op: 'x + 6n', test: [11n, 2, 6], count: 0 },
  { items: [93n, 54n], op: 'x * 11n', test: [5n, 1, 7], count: 0 },
  { items: [60n, 79n, 92n, 69n, 88n, 82n, 70n], op: 'x + 8n', test: [17n, 4, 0], count: 0 },
  { items: [64n, 57n, 73n, 89n, 55n, 53n], op: 'x + 1n', test: [19n, 0, 5], count: 0 },
  { items: [62n], op: 'x + 4n', test: [7n, 3, 2], count: 0 },
];

const numOfRounds = 30;

// console.log(monkeys[0].items);

for (let i = 0; i < numOfRounds; i++) {
  for (let monkey of monkeys) {
    // Iterate over items and perform operation, pass, then add to count
    for (let item of monkey.items) {
      item = eval(monkey.op.replaceAll('x', (item + 'n')));
      if (item / monkey.test[0] * monkey.test[0] == item) {
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
