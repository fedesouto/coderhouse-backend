const express = require('express')
const app = express();

app.use(express.urlencoded({extended: true}))
app.set('views', './views')
app.set('view engine', 'ejs')

const personas = [{nombre: "Federico", apellido:"Souto", edad: 27}]

app.get('/', (req, res) => {
    res.render('./form', {personas:personas})
})

app.post('/personas', (req, res) => {
    const {nombre, apellido, edad} = req.body;
    personas.push({nombre, apellido, edad})
    res.redirect('/')
})

app.listen(8080, () => {
    console.log('server listening')
})