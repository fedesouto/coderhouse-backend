const express = require('express')
const app = express();

app.set('views', './pug_views')
app.set('view engine', 'pug')

app.get('/datos', (req, res) => {
    const {minimo, maximo, valor, titulo} = req.query
    res.render('hello', {minimo, maximo, valor, titulo})
})

app.listen(8080, () => {
    console.log('server listening')
})