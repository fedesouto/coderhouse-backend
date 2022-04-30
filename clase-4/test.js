const Contenedor = require("./Contenedor");

const productos = new Contenedor("productos.txt");

productos.getAll()
    .then((data) => console.log("Todos los productos: ", data))

productos.getById(2)
    .then((data) => console.log("Producto por Id: ", data))

//productos.deleteById(3)


//productos.deleteAll() 

/* productos.save({
    title: "Cortinas azules",
    price: "15000",
    thumbnail: "https://media.istockphoto.com/photos/washing-machine-picture-id172485535"
})  */



