// 2022 day 7 part 1

const fs = require('fs');
let input = fs.readFileSync('input.txt', 'utf-8').split('\n');

// Parse input, creating nested objects representing a
// file structure.

let fileTree = {};
let pos = 'fileTree';

for (let line of input) {
  if (line.startsWith('$ ls')) {
    continue;
  }

  if (line.startsWith('$ cd')) {
    let cdDir = line.split(' ')[2];
    if (cdDir === '..') {
      pos = pos.substring(0, pos.lastIndexOf('.'));
    } else {
      pos = pos + '.' + cdDir;
    }
  } else {
    // Create new files and directories
    let file = line.split(' ');
    if (file[0] === 'dir') {
      // create new dir at current pos
      eval(pos + '.' + file[1] + ' = {}');
    } else {
      // create new file with filesize
      // console.log('creating new file: ' + file);
      eval(pos + '["' + file[1] + '"] = ' + file[0]);
    }
  }

}

console.log(fileTree);
