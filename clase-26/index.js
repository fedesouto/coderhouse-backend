const express = require('express')
const {generarJWT, verificarJWT} = require('./jwt')

const usuarios = [{username: 'fede', password: 'coder'}]


const app = express()

app.use(express.json())

const verificarSesion = (req, res, next) => {
    const auth = req.headers.authorization
    const token = auth.split(' ')[1]
    try {
        req.user = verificarJWT(token)
        next()
    } catch (error) {
        next(error)
    }
}


app.get('/', verificarSesion, (req, res, next) => {
    res.json(req.user)
})


app.post('/login', (req, res, next) => {
    const {username, password} = req.body
    const user = usuarios.find(usr => usr.username === username && usr.password === password)
    res.send(`Bearer ${generarJWT(user)}`)
})












app.listen(8080, () => console.log('server listening'))
