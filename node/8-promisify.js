const util = require('util');
const {readFile} = require('fs');

//promisify converts a function into a promise
const readFilePromise = util.promisify(readFile);

readFilePromise('./content/tst.txt', 'utf8').then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
