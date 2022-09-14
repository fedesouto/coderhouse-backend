const express = require('express')

const app = express()

const port = 8080
console.log(port)

app.use(express.json())

app.get('/', (_, res) => {
    res.send(`Servidor express en ${port} - PID ${process.pid} - ${new Date().toLocaleString()}`)
})

app.listen(port, () => console.log('server listening'))