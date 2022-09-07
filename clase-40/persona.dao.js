const ClienteMemoria = require("./cliente-memoria");
const Persona = require("./persona");

class PersonaDao {
    constructor() {
        this.cliente = new ClienteMemoria()
    }

    save(persona) {
        const p = new Persona(persona.nombre, persona.apellido, persona.dni)
        const dto = p.toDTO()
        this.cliente.save(dto.dni, dto)
    }
    getById(id) {
        const dto = this.cliente.getById(id)
        const persona = Persona.fromDTO(dto)
        return persona
    }
}

module.exports = PersonaDao