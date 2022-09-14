const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const app = express()

app.use(express.json())

app.use(cookieParser())
app.use(session({
    secret: 'shhhh',
    resave: true,
    saveUninitialized: false
}))

const usuarios = []


app.post('/register', (req, res, next) => {
    console.log(req.body)
    const {nombre, password, direccion} = req.body
    const usuario = {nombre, password, direccion}
    usuarios.push(usuario)
    res.send('usuario agregado')
})

app.post('/login', (req, res, next) => {
    const {nombre, password} = req.body
    const sesion = usuarios.find(user => user.nombre === nombre)
    if(sesion && sesion.password === password) {
        req.session.nombre = nombre
        res.send('/datos')
    }
    else {
        res.status(403).send('usuario o contraseña esta mal')
    }
})

app.get('/datos', (req, res, next) => {
    if(req.session?.nombre) next()
    else {
        res.status(403).send('debe iniciar sesion')
    }
},
(req, res, next) => {
    res.send('estos son los datos')
})

app.listen(8080, () => {
    console.log('server listening')
})