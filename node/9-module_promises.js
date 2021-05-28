const {readFile} = require('fs').promises;

//node also provides promises in native
readFile('./content/test.txt', 'utf8').then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
