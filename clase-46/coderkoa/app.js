const Koa = require('koa')
const koaBody = require('koa-body')
const alumnosRouter = require('./alumnos')

const app = new Koa()

app.use(koaBody())

app.use(alumnosRouter.routes())

const PORT = 8080

const server = app.listen(PORT, () => console.log('Server listening!'))

server.on('error', error => console.log('Error en el server: ', error))