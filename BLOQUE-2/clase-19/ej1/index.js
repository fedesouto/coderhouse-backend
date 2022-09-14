const mongoose = require('mongoose')
const model = require('./models/estudiante')

const students = [
    { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
    { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
    { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
    { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
    { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
    { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
    { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
    { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
    { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
    { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
]

async function ejecutar() {
    const URL = 'mongodb://127.0.0.1:27017/test'
    await mongoose.connect(URL)
    console.log('connected')
    /* for(let i in students){
        console.log(students[i])
        const nuevoEstudiante = new model(students[i])
        await nuevoEstudiante.save()
    } */
    /* const studs = await model.find().sort({ 'nombre': 1 })
    console.log('alfabeticamente: ' + studs)
    const joven = await model.find().sort({ edad: 1 }).limit(1)
    console.log('mas joven: ' + joven)
    const dosa = await model.find({ curso: '2A' })
    console.log(dosa)
    const segundojoven = await model.find().sort({ edad: 1 }).skip(1).limit(1)
    console.log(segundojoven)
    const puntoe = await model.find({}, { nombre: 1, apellido: 1, curso: 1, _id: 0 }).sort({ apellido: -1 })
    console.log(puntoe)
    const diez = await model.find({ nota: 10 })
    console.log(diez)
    const promedios = await model.aggregate([
        {
            $group: {
                "_id": null,
                "promedio": {
                    $avg: "$nota"
                }
            }
        }
    ])
    console.log(promedios)
    const promedios1a = await model.aggregate([

        {
            $match: {
                curso: "1A"
            }
        },
        {
            $group: {
                "_id": "$curso",
                "promedio": {
                    $avg: "$nota"
                }
            }
        }

    ])
    console.log(promedios1a) */


    //ejercicio 2

    /* await model.updateOne({nombre: 'Lucas', apellido: 'Blanco'}, {
        $set: {dni: '20355875'}
    })
    console.log('updated') */

    /* console.log(await model.updateMany({curso: '1A'}, {
        $set: {ingreso: true}
    })) */

    //console.log(await model.find({nota: {$gte: 4}}, {_id: 0, __v: 0}))
        
    //console.log(await model.deleteMany({ingreso: true}))

    const todos = await model.find()
    todos.forEach((stud) => {
        console.log(stud._id.getTimestamp().toLocaleString())
    })
    
}



ejecutar()