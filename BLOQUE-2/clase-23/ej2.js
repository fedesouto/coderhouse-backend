const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
    secret: "secreto",
    resave: true,
    saveUninitialized: true
}))

app.get('/', (req, res, next) => {
    if (req.session?.nombre) next()
    else {
        const { nombre = 'usuario' } = req.query 
        req.session.nombre = nombre
        req.session.visitas = 1
        res.send(`Bienvenido ${nombre}`)
    }}, (req, res) => {
        let {nombre, visitas} = req.session
        req.session.visitas++
        res.send(`ya ingresaste ${visitas} veces, ${nombre}`)
    }
)
app.get('/logout', (req, res, next) => {
    req.session.destroy(err => {
        if(err) res.send(`Error: ${err}`)
        else {res.send('session cerrada')}
    })
})
app.listen(8080, () => console.log('server listening'))