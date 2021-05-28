const path = require('path');

// returns platform separator
console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath)

//returns only file name
const base = path.basename(filePath);
console.log(base)

const absolute = path.resolve(__dirname, 'app.js');
console.log(absolute)