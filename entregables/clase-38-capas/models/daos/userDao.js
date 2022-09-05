const Contenedor = require("../../models/Contenedores/Contenedor");

const userDao = new Contenedor(process.env.MONGODB_URI, 'entregables', 'usuarios')

module.exports = userDao;
