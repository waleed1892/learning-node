const {createReadStream, readFileSync} = require('fs');


//read file is not able to read large files
// const second = readFileSync('./content/bigfile.txt', 'utf8')
// console.log(second)

//Default buffer size 64kb - reads 64kb at time
// last buffer - remainder
//highWaterMark - controls the size of buffer
const stream = createReadStream('./content/bigfile.txt', {
    highWaterMark: 1024,
    encoding: 'utf8'
});
stream.on('data', (result) => {
    console.log(result)
})

stream.on('error', () => {
    console.log('error reading file')
})