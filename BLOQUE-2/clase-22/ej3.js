import norm from 'normalizr'
import print from './print.js'

const data = {
    "id": 1,
    "nombre": "Richard Holdings",
    "empleados": [
        {
            "id": 1,
            "nombre": "Juan",
            "cluster_antiguedad": {
                "id": 1,
                "valor": "Menos de 1 año"
            },
            "area": {
                "id": 1,
                "nombre": "Recursos Humanos",
                "jefe": {
                    "id": 1,
                    "nombre": "Carlos"
                }
            }
        },
        {
            "id": 2,
            "nombre": "Juan",
            "cluster_antiguedad": {
                "id": 1,
                "valor": "Menos de 1 año"
            },
            "area": {
                "id": 2,
                "nombre": "Contaduria",
                "jefe": {
                    "id": 2,
                    "nombre": "Carla"
                }
            }
        },
        {
            "id": 3,
            "nombre": "Juan",
            "cluster_antiguedad": {
                "id": 2,
                "valor": "1 a 5 años"
            },
            "area": {
                "id": 1,
                "nombre": "Recursos Humanos",
                "jefe": {
                    "id": 3,
                    "nombre": "Vanesa"
                }
            }
        }
    ]
}

const jefeSchema = new norm.schema.Entity('jefes')
const areaSchema = new norm.schema.Entity('areas', {
    jefe: jefeSchema
})

const antiguedadSchema = new norm.schema.Entity('clusters_antiguedad')

const empleadoSchema = new norm.schema.Entity('empleados', {
    cluster_antiguedad: antiguedadSchema,
    area: areaSchema
})
const holdingSchema = new norm.schema.Entity('holdings', {
    empleados: [empleadoSchema]
})

const normalized = norm.normalize(data, holdingSchema)

print(normalized)