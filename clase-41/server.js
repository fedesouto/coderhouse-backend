const express = require('express')
const config = require('./config')
const stringsRouter = require('./routes/strings.routes')

const app = express()

app.use(express.json())


const port = config.PORT || 8080

app.use('/api', stringsRouter)

app.listen(port, () => console.log(`Server listening on port ${port}`))

app.on('error', (error) => console.error('Server error: ', error))