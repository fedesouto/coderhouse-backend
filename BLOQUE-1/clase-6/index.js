/* const http = require('http');

const server = http.createServer((req, res) => {
    const hora = new Date().getHours()
    if(hora > 20) res.end('Buenas noches!')
    if(hora < 20) res.end('Buenas tardes!')

})

const connectedServer = server.listen(8080, ()=>{
    console.log(`Server listening on port ${server.address().port}`)
}) */

const express = require('express')
const app = express()
let visits = 0;

app.get('/', (req, res, next) => {
    res.send('<h1 style="color: blue;">Bienvenidos al servidor express</h1>')
})
app.get('/visitas', (req, res, next) => {
    visits++
    res.send(`cantidad de visitas: ${visits}`)
})
app.get('/fyh', (req, res, next) => {
    const fecha = new Date().toLocaleString()
    res.send({fyh: fecha})
})

app.listen(8080, () => {
    console.log('servidor levantado')
})

