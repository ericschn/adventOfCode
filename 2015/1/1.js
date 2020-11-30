const fs = require('fs');

let input = fs.readFileSync('input.txt', 'utf8');

let up = input.match(/\(/g);
let down = input.match(/\)/g);

console.log(up.length - down.length);
