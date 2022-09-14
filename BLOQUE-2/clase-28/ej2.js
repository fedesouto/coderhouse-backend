const express = require('express')
const {fork} = require('child_process')

const app = express()

let visitas = 0



app.get('/', (req, res) => {
    visitas ++
    res.send(`cantidad de visitas: ${visitas}`)
})



app.get('/bloqueante', (req, res) => {
    let suma = 0
    for(let i=0; i < 5e9; i++){
        suma += i
    }
    res.json(suma)
})

app.get('/nobloqueante', (req, res) => {
    const forked = fork('ej2_fork.js')
    forked.send('start')
    forked.on('message', (message) => {
        res.json(message)
    })
})

app.listen(8080, () => console.log('Escuchando!'))