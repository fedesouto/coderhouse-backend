import express from 'express';
import Perimetro from './Perimetro'

const app = express();

app.get('/cuadrado', (req, res) => {
    const {lado} = req.query;
    const perimetro = Perimetro.cuadrado(Number(lado))
    res.json({
        lado,
        perimetro
    })
})
app.get('/rectangulo', (req, res) => {
    const {lado1, lado2} = req.query;
    const perimetro = Perimetro.rectangulo(Number(lado1), Number(lado2))
    res.json({
        lado1,
        lado2,
        perimetro
    })
})
app.get('/circulo', (req, res) => {
    const {diametro} = req.query;
    const perimetro = Perimetro.circulo(Number(diametro))
    res.json({
        diametro,
        perimetro
    })
})

app.listen(8080, () => {
    console.log('server listening')
})