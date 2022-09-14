const http= require('http')

const server = http.createServer((req, res) => {
    res.end(JSON.stringify((new Date().toString())))
})


server.listen(3000, 'localhost')

server.on('error', () => console.log(error))
