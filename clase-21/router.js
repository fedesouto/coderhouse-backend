import {Router} from 'express'
import ServicioMock from './servicio_mock.js'

const productRouter = Router()

const servicioMock = new ServicioMock()

productRouter.post('/popular', (req, res) => {
    const {cant} = req.query
    servicioMock.popular(cant)
    res.json('populated')
})

productRouter.get('/:id?', (req, res) => {
    const id = Number(req.params.id)
    res.json(servicioMock.obtener(id))
})

productRouter.post('/', (req, res) => {
    
})

productRouter.put('/:id', (req, res) => {
    
})

productRouter.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    servicioMock.borrar(id)
    res.status(200).send('borrado')
})


export default productRouter;