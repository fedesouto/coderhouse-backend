const express = require('express')
const Contenedor = require('../clase-4/Contenedor')
const productos = new Contenedor('productos.txt')

const app = express()

app.get('/productos', async (req, res) => {
    const data = await productos.getAll()
    res.send(data)
})

app.get('/productoRandom', async (req, res) => {
  const data = await productos.getRandom()
  res.send(data)
})

app.listen(8080, () => {
  console.log('server listening')
})