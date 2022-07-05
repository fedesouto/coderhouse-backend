const Contenedor = require("../Contenedores/Contenedor");

const mongodbUri = require("../utils/config");

const productDao = new Contenedor(mongodbUri, "entregables", "products");

module.exports = productDao;
