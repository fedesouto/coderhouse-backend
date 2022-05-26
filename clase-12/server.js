const express = require('express');
const {Server: IOServer} = require('socket.io')
const { Server: HttpServer } = require('http')

const app = express();
const httpServer = new HttpServer(app)
const ioServer = new IOServer(httpServer)

const messages = []

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

ioServer.on('connection', (socket) => {
    console.log('se conecto un usuario');
    socket.emit('messages', messages)
    socket.on('new_message', (message) => {
        messages.push(message)
        ioServer.sockets.emit('new_message', message)
    })
})

httpServer.listen(8080, () => {
    console.log('server listening')
})