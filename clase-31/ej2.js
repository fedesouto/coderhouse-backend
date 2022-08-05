const express = require('express')
const logger = require('./logger.js')

const app = express()




app.get('/sumar', (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)

    if(isNaN(num1) || isNaN(num2)) logger.error('Num 1 o num 2 son invalidos')

    const response = num1 + num2


    res.send(`La suma es ${response}`)
})


app.listen(8080, (error) => {
    if(error) logger.error('ocurriò un error al iniciar la aplicacion')
    else {
        logger.debug('Escuchando!')
    }
})