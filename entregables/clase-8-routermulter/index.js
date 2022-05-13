const express = require('express');
const productRouter = require('./product.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/productos', productRouter)
app.use(express.static('public'))

app.listen(8080, () => {
    console.log('server listening')
})