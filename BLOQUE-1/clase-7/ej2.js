const express = require("express")
const app = express()


//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const frase = 'Frase inicial'
const palabras = frase.split(' ')

app.get('/api/frase', (req, res) => {
    res.send(palabras.join(' '))
})

app.get('/api/palabras/:pos', (req, res) => {
    const posicion = parseInt(req.params.pos)
    res.send(palabras[posicion])
})

app.post('/api/palabras', (req, res) => {
    const palabraAgregar = req.body.palabra;
    palabras.push(palabraAgregar)
    res.json({
        agregada: palabraAgregar,
        position: palabras.length - 1
    })
})

app.listen(8080, () => {
    console.log('escuchando')
})
