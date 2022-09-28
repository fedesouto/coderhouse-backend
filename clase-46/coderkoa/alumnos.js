const Router = require('koa-router')

const router = new Router({
    prefix: '/alumnos'
})

let alumnos = []

router.get('/', ctx => {
    ctx.body = {
        status: 'success',
        message: alumnos
    }
})

router.get('/find/:id', ctx => {
    const alumno = alumnos.find(obj => obj.id === Number(ctx.params.id))
    if(!alumno) {
        ctx.response.status = 404
        ctx.body = {
            status: 'error',
            message: 'Id does not match any student'
        }
    }
    else {
        ctx.body = alumno;
    }
})

router.post('/', ctx => {
    if(
        !ctx.request.body.id ||
        !ctx.request.body.nombre ||
        !ctx.request.body.materia ||
        !ctx.request.body.nota
    ) {
        ctx.response.status = 400
        ctx.body = {
            status: 'error',
            message: 'Bad request body'
        }
    }
    else {
        const newStudent = {
            id: ctx.request.body.id,
            nombre: ctx.request.body.nombre,
            materia: ctx.request.body.materia,
            nota: ctx.request.body.nota
        }
        alumnos.push(newStudent)
        ctx.response.status = 201
        ctx.body = {
            status: 'success',
            message: newStudent
        }
    }
})

router.get('/materia/:materia', ctx => {
    const cursantes = alumnos.filter(alumno => alumno.materia === ctx.params.materia)
    if(!cursantes.length) {
        ctx.response.status = 404
        ctx.body = {
            status: 'error',
            message: 'No existe la materia'
        }
    }
    else {
        const promedio = (cursantes.reduce((a, b) => {return a + b.nota}, 0)) / cursantes.length
        ctx.body = {
            status: 'success',
            message: `Promedio de ${ctx.params.materia}: ${promedio}`
        }
    }
})

module.exports = router