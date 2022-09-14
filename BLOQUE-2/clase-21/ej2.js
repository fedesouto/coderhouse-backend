import {faker} from '@faker-js/faker'
import express from 'express'

const app = express()

faker.setLocale('es');
const mocks = (quantity) => {
    const array = []
    for(let i = 0; i < quantity; i++){
        const obj = {
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            color: faker.color.human()
        }
        array.push(obj)
    }
    return array;
}



app.get('/test', (req, res) => {
    const cantidad = Number(req.query.cant) || 10
    res.json(mocks(cantidad))
})


app.listen(8080, () => {
    console.log('server listening')
})