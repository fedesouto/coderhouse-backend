const { Router } = require("express");
const passport = require('../utils/passport')
const path = require("path");
const { loginErrorHandler, signupErrorHandler } = require("../middlewares/passportErrorHandlers");


const sessionRouter = Router();

sessionRouter.get('/login', (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'public', 'pages', 'login.html'))
})

sessionRouter.get('/signup', (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'public', 'pages', 'signup.html'))
})

sessionRouter.get('/failedLogin', (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'public', 'pages', 'failedLogin.html'))
})
sessionRouter.get('/failedSignup', (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'public', 'pages', 'failedSignup.html'))
})
sessionRouter.post('/login', passport.authenticate('login'), loginErrorHandler , (req, res, next) => {
    return res.redirect('/')
})

sessionRouter.post('/signup', passport.authenticate('signup'), signupErrorHandler, (req, res, next) => {
    res.redirect('/')
})

sessionRouter.get('/logout', (req, res, next) => {
    const username = req.user.username
    req.logout((error) => {
        if(error) res.send(`Error: ${error}`)
        else {
            res.send(username)
        }
    })
})

sessionRouter.get('/user', (req, res, next) => {
    if(req.user) res.send({username: req.user.username, email: req.user.email})
    else res.send('invitado')
})

module.exports = sessionRouter