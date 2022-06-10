const Knex = require('knex').default
const knex = Knex({
    client: 'sqlite3',
    connection: {
        filename: './ecommerce.sqlite'
    }
});


(
    async () => {
        await knex.schema.dropTableIfExists('articulos')
        await knex.schema.createTable('articulos', table => {
            table.string('nombre', 15).notNullable()
            table.string('codigo', 10).notNullable()
            table.float('precio')
            table.integer('stock')
            table.increments('id').notNullable()
            table.primary('id')
        })
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
        await knex.destroy()
    }
)()

