const http = require('http');
const {readFileSync, createReadStream} = require('fs')

http.createServer((req, res) => {
    // const text = readFileSync('./content/bigfile.txt', 'utf8');
    // res.end(text)
    const fileStream = createReadStream('./content/bigfile.txt', 'utf8')
    //file stream has a pipe stream it is use to write steram
    fileStream.on('open', () => {
        fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
        res.end(err)
    })
}).listen(5000)