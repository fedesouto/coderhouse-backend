const express = require('express')
const { Server: IOServer } = require('socket.io')
const { Server: HttpServer } = require('http')

const socketsMap = []
const app = express()
const httpServer = new HttpServer(app)
const ioServer = new IOServer(httpServer)

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile('index.html')
})

ioServer.on('connection', (socket) => {
    console.log('Nuevo cliente conectado!')
    socket.on('mensaje', (mensaje) => {
        socketsMap.push({[socket.id]: mensaje})
        ioServer.sockets.emit('mensajes', JSON.stringify(socketsMap))})
    socket.emit('bienvenida', 'Bienvenido al websocket')
})

httpServer.listen(3000, () => console.log('server listening'))