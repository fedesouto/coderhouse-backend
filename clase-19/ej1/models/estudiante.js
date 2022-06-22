const mongoose = require('mongoose')

const estudiantesCollection = 'estudiantes';

const EstudianteSchema = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    edad: {type: Number, required: true},
    dni: {type: String, required: true, unique: true },
    curso: {type: String, required: true},
    nota: {type: Number, required: true},
    ingreso: {type: Boolean, required: true}
})

module.exports=  mongoose.model(estudiantesCollection, EstudianteSchema)