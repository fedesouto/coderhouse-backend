const express = require('express')
const session = require('express-session')
const FileStore = require('session-file-store')
const cookieParser = require('cookie-parser')
const fileStore = FileStore(session)

const app = express()

app.use(cookieParser())

app.use(session({
    secret: 'secreto',
    saveUninitialized: true,
    resave: true,
    store: new fileStore({
        path: './sessions', ttl: 600, retries: 1
    })
}))

app.get('/', (req, res, next) => {
    if(req.session?.nombre) next()
    else{
        const {nombre = 'invitado'} = req.query
        req.session.nombre = nombre
        req.session.visitas = 1
        res.send(`Bienvenido ${nombre}!`)
    }
}, (req, res) => {
    let {nombre, visitas} = req.session
    req.session.visitas++
    res.send(`${nombre}, esta es tu visita numero ${visitas}`)
})

app.listen(8080, () => console.log('server listening'))