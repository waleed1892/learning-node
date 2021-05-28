const http = require('http');
const {readFileSync} = require('fs')
http.createServer(((req, res) => {
    console.log(req.method) // returns method eg. GET, POST
    console.log(req.url) // url - user requesting

    res.writeHead(200, {
        'content-type': 'text/html'
    })
    res.end(readFileSync('./index.html'));


    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    res.end('<h1>Title</h1>');
})).listen(5000)
