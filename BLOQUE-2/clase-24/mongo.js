const mongoUri = 'mongodb+srv://federoot:federoot@cluster0.iiotc.mongodb.net/?retryWrites=true&w=majority'
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true}

const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')

const app = express()

app.use(cookieParser())

app.use(session({
    secret: 'secreto',
    saveUninitialized: false,
    resave: false,
    store: MongoStore.create({
        mongoUrl: mongoUri,
        mongoOptions: advancedOptions
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