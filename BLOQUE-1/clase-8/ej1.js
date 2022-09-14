const express = require('express')
const routerMascotas = express.Router()
const routerPersonas = express.Router()

const personas = [{ nombre: 'Federico', apellido: 'Souto', edad: 27 }]
const mascotas = [{ nombre: 'Gino', raza: 'Chihuahua', edad: 10 }]




routerMascotas.get('/', (req, res) => {
    res.json(mascotas)
})
routerMascotas.post('/', (req, res) => {
    const nuevaMascota = req.body
    mascotas.push(nuevaMascota)
    res.json(nuevaMascota)
})

routerPersonas.get('/', (req, res) => {
    res.json(personas)
})
routerPersonas.post('/', (req, res) => {
    const nuevaPersona = req.body
    personas.push(nuevaPersona)
    res.json(nuevaPersona)
})


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/personas', routerPersonas)
app.use('/mascotas', routerMascotas)

app.listen(8080, () => {
    console.log('server listening ej1')
})