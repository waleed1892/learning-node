const {readFile} = require('fs');
// async promises
const getText = () => {
    return new Promise(((resolve, reject) => {
        readFile('./content/test.txt', 'utf8', ((err, data) => {
            if (err)
                reject(err)
            resolve(data)
        }))
    }))
}

getText().then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})

//async await
const start = async () => {
    try {
        const first = await getText();
        console.log(first)
    } catch (e) {
        console.log(e)
    }
}

start();