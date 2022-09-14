import express from 'express';
import productRouter from './router.js';

const app = express()

app.use(express.json())
app.use('/api/usuarios', productRouter)


app.listen(8080, () => console.log('server listening'))