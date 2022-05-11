const express = require("express")
const morgan = require('morgan')
const app = express()

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const frase = 'Hola mundo como estan'


app.get('/api/frase', (req, res) => {
    res.send(frase)
})
app.get('/api/letras/:num', (req, res) => {
    const num = parseInt(req.params.num);
    if(isNaN(num)) res.status(400).send('el parametro no es un numero')
    if(!frase[num-1]) res.status(404).send('la posicion excede al largo de la frase')
    else res.send(frase[num-1])
})
app.get('/api/palabras/:num', (req, res) => {
    const num = parseInt(req.params.num);
    const fraseDividida = frase.split(' ')
    if(isNaN(num)) res.status(400).send('el parametro no es un numero')
    if(!fraseDividida[num-1]) res.status(404).send('la frase es mas corta')
    else res.send(fraseDividida[num-1])
})




app.listen(8080, () => {
    console.log('server listening')
})