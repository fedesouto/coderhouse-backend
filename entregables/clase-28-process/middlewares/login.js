const isLoggedIn = (req, res, next) => {
    if(req.user) {

        next()
    }
    else {
        return res.redirect('/login')
    }
}

module.exports = isLoggedIn