class ClienteMemoria {
    constructor() {
        this.objetos = {}
    }
    save(id, dto) {
        this.objetos[id] = dto
    }
    getById(id) {
        return this.objetos[id]
    }
    getAll() {
        return Object.values(this.objetos)
    }
}

module.exports = ClienteMemoria