const session = require('express-session')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
    

const usuarios = []

passport.use('register', new LocalStrategy({
    passReqToCallback: true
}, 
(req, username, password, done) => {
    const user = usuarios.find(usr => usr.username === username)
    if(user) {
        console.log('user already exists')
        return done(null, false)
    }    
    const newUser = {
        username: username,
        password: password
    }
    done(null, newUser)
}
))

passport.serializeUser((newUser, done) => {
    done(null, newUser.username) 
})

passport.deserializeUser((user, done) => {
    done(user, done)
})

module.exports = passport