const { MONGODB_URI } = require("../../../config");
const ContenedorMongoDB = require("../../Contenedores/Contenedor");
let instance = null

class UserMongoDAO extends ContenedorMongoDB {
    constructor(){
        super(MONGODB_URI, 'entregables', 'usuarios')
    }
    static getInstance() {
        if (!instance) {
            instance = new UserMongoDAO()
        }
        return instance
    }
}

module.exports = UserMongoDAO