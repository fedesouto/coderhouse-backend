(async () => {
const Knex = require('knex').default
const knex_sqlite = Knex({
    client: 'sqlite3',
    connection: {
        filename: `${process.cwd()}/db/ecommerce.sqlite`
    },
    useNullAsDefault: true
})
    try {
        await knex_sqlite.schema.createTable('chats', (table) => {
            table.increments('id').primary()
            table.string('user', 20).notNullable()
            table.string('message').notNullable()
            table.timestamp('timestamp')
        })
    } catch (error) {
        console.log(error)
    }
    finally {
        console.log('table created')
        knex_sqlite.destroy()
    }
})()
