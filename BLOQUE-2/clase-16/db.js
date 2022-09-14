const Knex = require('knex').default

const options = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'coderhouse'
}

const knex = Knex({
    client: 'mysql2',
    connection: options
})
//crear table

/* knex.schema.createTable('autos', table => {
    table.increments('id');
    table.string('modelo', 30);
    table.integer('year')
}).then(() => {
    console.log('tabla creada')
}).catch((error) => console.log(error))
.finally(() => knex.destroy()) */

//insert

/* knex('autos').insert([{
    modelo: 'Ford Fiesta',
    year: 2013
}, 
{
    modelo: 'Peugeot 207',
    year: 2010
}])
.then(() => console.log('inserted'))
.catch(error => console.log(error))
.finally(() => knex.destroy()) */

//select
knex.from('autos').select('modelo').then(filas => {
    console.log(filas)
}).finally(() => knex.destroy())