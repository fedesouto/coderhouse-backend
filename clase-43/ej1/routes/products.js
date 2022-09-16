var express = require('express');
var router = express.Router();
const {productos, createProducto} = require('../db/productos')

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.json(productos)
});

router.get('/:id', (req, res, next) => {
  const product = productos.find(producto => producto.id === Number(req.params.id)) 
  if(product) {
    res.json(product)
  }
  else {
    res.status(404).send('Producto no encontrado')
  }
})

router.post('/', (req, res, next) => {
  const response = createProducto(req.body)
  res.send(response)

})

module.exports = router;
