const blogPosts = [
    {
        id: 1,
        titulo: 'first post',
        autor: {
            id: 1,
            nombre: 'Fede'
        },
        comentarios: [
            {
                id: 1,
                comentario: 'muy bueno',
                autor: {
                    id: 2,
                    nombre: 'pepe'
                }
            }
        ],
        categoria: {
            id: 1,
            nombre: 'programacion'
        }
    }, {
        id: 2,
        titulo: 'segundo post',
        autor: {
            id: 1,
            nombre: 'Fede'
        },
        comentarios: [
            {
                id: 2,
                comentario: 'muy malo',
                autor: {
                    id: 3,
                    nombre: 'juan'
                }
            },
            {
                id: 3,
                comentario: 'malisimo',
                autor: {
                    id: 2,
                    nombre: 'pepe'
                }
            }
        ],
        categoria: {
            id: 1,
            nombre: 'programacion'
        }
    }
]

export default blogPosts