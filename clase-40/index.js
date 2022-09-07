const PersonaDao = require("./persona.dao");

const dao = new PersonaDao()

const persona1 = dao.save({nombre: 'federico', apellido: 'souto', dni: 1234})

const respuesta = dao.getById(1234)

console.log(respuesta)