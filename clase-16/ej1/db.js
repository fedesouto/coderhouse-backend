const Knex = require('knex').default

const options = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'ecommerce'
}

const knex = Knex({
    client: 'mysql2',
    connection: options
})

/*         knex.schema.createTable('articulos', table => {
            table.string('nombre', 15).notNullable()
            table.string('codigo', 10).notNullable()
            table.float('precio')
            table.integer('stock')
            table.increments('id').notNullable()
            table.primary('id')
        })
    .then(() => console.log('table created')) */
/*     .then(() => {
        knex('articulos').insert([{
            nombre: 'Mate',
            codigo: 'matesito1',
            precio: 100.22,
            stock: 4
        }, {
            nombre: 'Yerba',
            codigo: 'yerba',
            precio: 534.26,
            stock: 3
        }, {
            nombre: 'Bombilla',
            codigo: 'bombilla3',
            precio: 1003.22,
            stock: 2
        }, {
            nombre: 'Termo',
            codigo: 'termostan',
            precio: 100333.22,
            stock: 1
        }, {
            nombre: 'Otro mate',
            codigo: 'matesito2',
            precio: 400.22,
            stock: 20
        }
        ])
    }).then(() => {
        console.log('articulos agregados')
    })
    .then(() => {
        knex.from('articulos').select('*').then(datos => console.log(datos))
    })
    .finally(() => knex.destroy()) */



const ejecutar = async () => {
    await knex('articulos').insert([{
        nombre: 'Mate',
        codigo: 'matesito1',
        precio: 100.22,
        stock: 4
    }, {
        nombre: 'Yerba',
        codigo: 'yerba',
        precio: 534.26,
        stock: 3
    }, {
        nombre: 'Bombilla',
        codigo: 'bombilla3',
        precio: 1003.22,
        stock: 2
    }, {
        nombre: 'Termo',
        codigo: 'termostan',
        precio: 100333.22,
        stock: 1
    }, {
        nombre: 'Otro mate',
        codigo: 'matesito2',
        precio: 400.22,
        stock: 20
    }
    ])
    const datos = await knex.from('articulos').select('*')
    console.log(datos)
}
ejecutar()