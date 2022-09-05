const Contenedor = require("../../models/Contenedores/Contenedor");

const productDao = new Contenedor(process.env.MONGODB_URI, "entregables", "products");

module.exports = productDao;
