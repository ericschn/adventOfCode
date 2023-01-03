const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');

const shading = ' .:-=+*#%@';
let artwork = '';

for (let char of input) {
  if (char === '\n') {
    artwork += '\n';
  } else {
    artwork += shading[parseInt(char)];
  }
}

console.log(artwork);
