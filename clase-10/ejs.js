const express = require('express')
const app = express();

app.set('views', './ejs_views')
app.set('view engine', 'ejs')

app.get('/datos', (req, res) => {
    const {minimo, maximo, valor, titulo} = req.query
    res.render('pages/datos', {minimo:minimo, maximo:maximo, valor:valor, titulo: titulo})
})

app.listen(8080, () => {
    console.log('server listening')
})