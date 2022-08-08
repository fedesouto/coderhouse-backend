const Contenedor = require("../Contenedores/Contenedor");

const chatDao = new Contenedor(process.env.MONGODB_URI, 'entregables', 'chats')



module.exports = chatDao;
