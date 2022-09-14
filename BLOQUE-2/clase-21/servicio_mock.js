import { faker } from '@faker-js/faker'

class ServicioMock {
    mocks = []

    obtener(indice) {
        if(indice) return this.mocks[indice]
        return this.mocks
    }

    agregar(mock) {
        this.mocks.push(mock)
    }

    actualizar(id, mock) {
        const newMock = {...mocks[id], ...mock}
        mocks[id] = newMock;
    }

    borrar(id) {
        this.mocks.splice(id, 1)
    }
    popular(cant = 50) {
        for (let i = 1; i < cant; i++) {
            this.mocks.push({
                nombre: faker.name.firstName(),
                website: faker.internet.domainName(),
                email: faker.internet.email(),
                imagen: faker.image.avatar()
            })
        }
    }

}

export default ServicioMock;