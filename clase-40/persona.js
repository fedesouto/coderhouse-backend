class Persona {
    constructor(nombre, apellido, dni) {
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
    }

    static fromDTO(dto) {
        const p = new Persona()
        p.nombre = dto.nombre;
        p.apellido = dto.apellido;
        p.dni = dto.dni;
        return p
    }
    toDTO() {
        const dto = {
            nombre: this.nombre,
            apellido: this.apellido,
            dni: this.dni
        }
        return dto
    }
}

module.exports = Persona