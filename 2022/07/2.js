// 2022 day 7 part 2

const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split('\n');

// Parse input, creating nested objects representing a
// file structure.

let root = {};
let pos = 'root';
let depth = 0;

let result = new Map();

for (let line of input) {
  if (line.startsWith('$ ls')) {
    continue;
  }

  if (line.startsWith('$ cd')) {
    let cdDir = line.split(' ')[2];
    if (cdDir === '..') {
      pos = pos.substring(0, pos.lastIndexOf('.'));
      depth--;
    } else {
      pos = pos + '.' + cdDir;
      depth++;
    }
  } else {
    // Create new files and directories
    let file = line.split(' ');
    if (file[0] === 'dir') {
      // create new dir at current pos
      eval(pos + '.' + file[1] + ' = {}');
    } else {
      // create new file with filesize
      eval(pos + '["' + file[1] + '"] = ' + file[0]);

      let size = parseInt(file[0]);
      result.set(pos, result.has(pos) ? result.get(pos) + size : size);

      // run it up the filetree adding the amount to all parent objects
      let tempPos = pos;
      for (let i = 0; i < depth; i++) {
        tempPos = tempPos.substring(0, tempPos.lastIndexOf('.'));
        // console.log('running up the tree to: ' + tempPos);
        result.set(tempPos, result.has(tempPos) ? result.get(tempPos) + size : size);
      }
    }
  }
}

// Find how much needed to delete
let toDelete = 30000000 - (70000000 - result.get('root'));
let dirValues = [...result.values()].sort((a, b) => a - b);

console.log('Need to delete: ' + toDelete);

for (let val of dirValues) {
  if (val >= toDelete) {
    console.log(val);
    break;
  }
}
