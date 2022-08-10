const express = require('express')

const app = express()

app.use(express.json())

const calculateRandom = () => {
    let randomsArr = []
    for(let i = 0; i < 10000; i++) {
        const num = Math.floor(Math.random() * 10)
        randomsArr.push(num)
    }
    return {randoms: randomsArr}
}

app.get('/randoms-nodebug', (req, res) => {
    res.json(calculateRandom())
})

app.get('/randoms-debug', (req, res) => {
    const result = calculateRandom()
    console.log(result)
    res.json(result)
})

app.listen(8080, () => console.log('Escuchando!'))