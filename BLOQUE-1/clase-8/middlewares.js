const express = require('express')
const app = express()

const primerMiddleware = (req, res, next) => {
    console.log('primer middleware')
    next()
}
const segundoMiddleware = (req, res, next) => {
    console.log('segundo middleware')
    next()
}

app.use((req, res, next) => {
    console.log('pase por el middleware a nivel aplicacion')
    next()
})

app.get('/ruta1', primerMiddleware, (req, res) => {
    res.send('ruta1')
})
app.get('/ruta2', primerMiddleware, segundoMiddleware, (req, res) => {
    res.send('ruta1')
})
app.get('/ruta3', (req, res, next) => {
    next(new Error('este es el error'))
})

app.use((error, req, res, next) => {
     console.log(error)
      res.status(500).send('hubo un error')})

app.listen(8080, () => console.log('listening'))
