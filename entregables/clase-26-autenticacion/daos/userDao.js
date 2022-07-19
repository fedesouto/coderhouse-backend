const Contenedor = require("../Contenedores/Contenedor");
const mongodbUri = require('../utils/config')

const userDao = new Contenedor(mongodbUri, 'entregables', 'usuarios')



module.exports = userDao;
