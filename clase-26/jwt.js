require('dotenv').config()
const jwt = require('jsonwebtoken')

const {JWT_SECRET} = process.env

const generarJWT = (payload) => {
    return jwt.sign(payload, JWT_SECRET)
} 

const verificarJWT = (token) => {
    jwt.verify(token, JWT_SECRET, (err, contenido) => {
        if(err) throw new Error('Token invalido')
        return contenido
    })
}

module.exports = {generarJWT, verificarJWT}

