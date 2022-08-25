const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hola Yarn')
})

app.listen(8080, () => console.log('server listening'))