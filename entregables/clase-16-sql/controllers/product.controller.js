const Contenedor = require("../Contenedor");

const options = {
  client: "mysql2",
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ecommerce'
},
  useNullAsDefault: true,
};

const productController = new Contenedor("products", options);


module.exports = productController;