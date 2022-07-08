const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

const redis = require('redis')
const client = redis.createClient(8080, 'redis-13423.c16.us-east-1-3.ec2.cloud.redislabs.com:13423')
const RedisStore = require('connect-redis')(session)

const app = express()

app.use(cookieParser())
app.use(session({
    store: new RedisStore({
        host: 'redis-13423.c16.us-east-1-3.ec2.cloud.redislabs.com:13423',
        port: 8080,
        pass: 'Hd8cyTTCBGKEWAQ2LcVK8jOsEsXu6cLW',
        client
    }),
    secret: 'fedefede',
    saveUninitialized: true,
    resave: true
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

client.connect().then(() => {
    app.listen(3000, () => console.log('server listening'))
})