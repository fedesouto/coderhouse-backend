const express = require('express')
const passport = require('./passport')
const session = require('express-session')

const app = express()

app.use(session({
    secret: 'shh',
    rolling: true, 
    saveUninitialized: false,
    resave: true
}))

app.use(express.json())

app.use(passport.initialize())

app.use(passport.session())

app.post('/register', passport.authenticate('register'), (req, res, next) => {
    res.send(req.user)
})

app.listen(8080, () => console.log('listening'))