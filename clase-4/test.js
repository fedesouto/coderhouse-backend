const Contenedor = require('./Contenedor');

const productos = new Contenedor('productos.txt')

productos.save({hola: 'soy un obj', chau: 'soy'})