import express from 'express'

const nombres = ['Luis', 'Lucía', 'Juan', 'Augusto', 'Ana']
const apellidos = ['Pieres', 'Cacurri', 'Bezzola', 'Alberca', 'Mei']
const colores = ['rojo', 'verde', 'azul', 'amarillo', 'magenta']

const randomize = () => {
    const random = Math.floor(Math.random() * 5)
    return random
}
randomize()
const randomObjects = () => {
    const array = []
    for(let i=0; i < 10; i++){
        const obj = {
            nombre: nombres[randomize()],
            apellido: apellidos[randomize()],
            color: colores[randomize()]
        }
        array.push(obj)
    }
    return array;
}


const app = express()

app.get('/test', (req, res) => {
    res.json(randomObjects())
})

app.listen(8080, () => console.log('server listening'))