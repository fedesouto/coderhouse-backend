const express = require('express')

const app = express()


const PORT = parseInt(process.argv[2]) || 8082  

if(!PORT) throw new Error('El puerto no fue definido')


app.get('/datos', (req, res) => {
    res.send(`Servidor express PID ${process.pid}<span style="color: violet">(Nginx)</span> en puerto ${PORT}`)
})

app.listen(PORT, () => {
    console.log('Server listening!')
})