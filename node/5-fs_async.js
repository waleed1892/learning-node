const {readFile, writeFile} = require('fs')

readFile('./content/test.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return;
    }
    writeFile('./content/result2.txt', data, (err1) => {
        if (err1)
            return;
    })
})