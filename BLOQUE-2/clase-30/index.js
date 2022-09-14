const express = require('express')

const app = express()

const PORT = parseInt(process.argv[2])

if(!PORT) throw new Error('el puerto no fue definido')

app.use(express.static('public'))

app.listen(PORT, () => console.log('Server listening!'))