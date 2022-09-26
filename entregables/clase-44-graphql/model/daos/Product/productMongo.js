const { MONGODB_URI } = require("../../../config");
const ContenedorMongoDB = require("../../Contenedores/Contenedor");

let instance = null

class ProductMongoDAO extends ContenedorMongoDB {
    constructor() {
        super(MONGODB_URI, "entregables", "products")
    }
    static getInstance() {
        if (!instance) {
            instance = new ProductMongoDAO()
        }
        return instance
    }
}

module.exports = ProductMongoDAO