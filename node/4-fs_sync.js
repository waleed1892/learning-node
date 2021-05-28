const fs = require('fs');

//Adding utf8 will return the file content directly else Buffer
const testFile = fs.readFileSync('./content/test.txt', 'utf8')

console.log(testFile)

//If file present it will be override else created
fs.writeFileSync('./content/result.txt', `Here is the result of reading file: ${testFile}`, {flag: 'a'})