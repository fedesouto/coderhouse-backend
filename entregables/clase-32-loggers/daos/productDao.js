const Contenedor = require("../Contenedores/Contenedor");

const productDao = new Contenedor(process.env.MONGODB_URI, "entregables", "products");

module.exports = productDao;
