const { MONGODB_URI } = require("../../../config");
const ContenedorMongoDB = require("../../Contenedores/Contenedor");
let instance = null

class ChatMongoDAO extends ContenedorMongoDB {
    constructor() {
        super(MONGODB_URI, 'entregables', 'chats')
    }
    static getInstance() {
        if (!instance) {
            instance = new ChatMongoDAO()
        }
        return instance
    }
}

module.exports = ChatMongoDAO