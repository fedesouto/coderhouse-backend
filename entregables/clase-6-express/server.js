const express = require('express')
const Contenedor = require('../clase-4/Contenedor')
const productos = new Contenedor('./clase-6-express/productos.txt')

const app = express()

app.get('/', (req, res) => {
  res.send('<div><a href="/productos">ver productos</a><br><a href="/productoRandom">ver producto al azar</a></div>')
})

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