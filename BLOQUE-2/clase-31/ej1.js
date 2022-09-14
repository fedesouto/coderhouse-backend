const express = require('express')
const compression = require('compression')

const app = express()

const generarSaludo = () => {
    let saludo
    for (let i = 0; i < 1000; i++) {
        saludo += 'hola que tal? '
    }
    return saludo

}




app.get('/saludo', (req, res) => {
    res.send(generarSaludo())
})

app.get('/saludogzip', compression(), (req, res) => {
    res.send(generarSaludo())
})

app.listen(8080, () => console.log('Escuchando!'))