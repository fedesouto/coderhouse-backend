const http = require('http')
const fs = require('fs')

const options = {
    port: 80,
    method: 'GET',
    host: 'jsonplaceholder.typicode.com',
    path: '/posts'

}

const req = http.request(options, (res) => {
    console.log(res.statusCode)
    res.on('data', buffer => {
        const data = buffer.toString()
        fs.writeFile('./datoshttp.json', data, (err) => {
            if(err) console.log(err)
            else {
                console.log('done')
            }
        })
    })
})

req.end()