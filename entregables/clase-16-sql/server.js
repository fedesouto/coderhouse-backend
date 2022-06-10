const express = require('express')
const { getAll } = require('./controllers/chat.controller')

const app = express()


app.get('/', getAll)

app.listen(8080, () => console.log('server listening'))