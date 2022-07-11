const Contenedor = require("../Contenedores/Contenedor");
const mongodbUri = require('../utils/config')

const chatDao = new Contenedor(mongodbUri, 'entregables', 'chats')



module.exports = chatDao;
