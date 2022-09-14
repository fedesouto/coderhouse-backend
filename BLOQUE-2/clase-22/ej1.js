import util from 'util'
import norm from 'normalizr'

const empresa = [
    {
        "id": 1,
        "nombre": "Juan",
        "gerente": {
            "id": 1,
            "nombre": "Carlos"
        },
        "posicion": {
            "id": 1,
            "nombre": "Contador"
        }
    },
    {
        "id": 2,
        "nombre": "Pedro",
        "gerente": {
            "id": 1,
            "nombre": "Carlos"
        },
        "posicion": {
            "id": 1,
            "nombre": "Contador"
        }
    },
    {
        "id": 3,
        "nombre": "Quique",
        "gerente": {
            "id": 2,
            "nombre": "Vanesa"
        },
        "posicion": {
            "id": 2,
            "nombre": "Abogado"
        }
    }
]


function print(objeto) {
    console.log(util.inspect(objeto,false,12,true))
}

const posicionSchema = new norm.schema.Entity('posiciones')
const gerenteSchema = new norm.schema.Entity('gerentes')
const empleadoSchema = new norm.schema.Entity('empleados', {
    gerente: gerenteSchema,
    posicion: posicionSchema
})

const normalizedEmpresa = norm.normalize(empresa, [empleadoSchema])

const desnormalizado = norm.denormalize(normalizedEmpresa.result, [empleadoSchema], normalizedEmpresa.entities)

console.log(JSON.stringify(normalizedEmpresa.result).length)
console.log(JSON.stringify(desnormalizado).length)