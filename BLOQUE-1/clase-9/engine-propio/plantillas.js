const express = require('express')
const app = express()
const fs = require('fs')

app.engine('fgs', (path, opciones, callback) => {
    const contenidoArchivo = String(fs.readFileSync(path))
    const { titulo, mensaje, autor, version } = opciones
    const renderizado = contenidoArchivo.replace('^^titulo$$', titulo)
        .replace('^^mensaje$$', mensaje)
        .replace('^^autor$$', autor)
        .replace('^^version$$', version)

    return callback(null, renderizado)
})

app.set('views', './views')
app.set('view engine', 'fgs')

app.get('/cte1', (req, res) => {
    res.render('index', { titulo: "mi motor de plantillas", mensaje: "mi mensaje", autor: "Federico", version: "1.0" })
})


app.listen(8080, () => {
    console.log('server listening')
})