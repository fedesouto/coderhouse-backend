const dotenv = require('dotenv').config()

const resultado = {
    port: process.env.PORT,
    mode: process.env.MODE,
    debug: process.env.DEBUG
}

console.log(resultado)