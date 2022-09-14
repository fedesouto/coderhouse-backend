const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
    destination: 'uploads',
    filename: (req, file, cb) => {
        const fileName = file.fieldname + '-' + Date.now()
        cb(null, fileName)
    }
})

const uploader = multer({storage: storage})

app.post('/subida', uploader.single('archivo'), (req, res, next) => {
    const file = req.file;
    res.send(file)
})


app.get('/subir', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(8080, () => {
    console.log('listening multer')
})