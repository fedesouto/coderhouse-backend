const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.post('/cookies', (req, res, next) => {
    const {nombre, valor, duracion} = req.body
    res.cookie(nombre, valor, {maxAge: Number(duracion)})
    res.send('cookie agregada')
})

app.get('/cookies', (req, res, next) => {
    const cookies = req.cookies
    res.send(cookies)
})

app.delete('/cookies/:nombre_cookie', (req, res, next) => {
    const cookieName = req.params.nombre_cookie
    res.clearCookie(cookieName).send('cookie deleted')
    
})

app.listen(8080, () => console.log('server listening'))