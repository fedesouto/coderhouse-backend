const { Router } = require("express");
const path = require("path");


const sessionRouter = Router();

sessionRouter.get('/login', (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'public', 'login.html'))
})

sessionRouter.post('/login', (req, res, next) => {
    const {username} = req.body
    req.session.username = username
    return res.redirect('/')
})

sessionRouter.get('/logout', (req, res, next) => {
    const username = req.session.username
    req.session.destroy((error) => {
        if(error) res.send(`Error: ${error}`)
        else {
            res.send(username)
        }
    })
})

sessionRouter.get('/user', (req, res, next) => {
    if(req.session?.username) res.send(req.session.username)
    else res.send('invitado')
})

module.exports = sessionRouter