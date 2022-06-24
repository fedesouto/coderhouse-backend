const { MongoClient } = require('mongodb')

const ejecutar = async () => {
    const mongo = new MongoClient('mongodb+srv://federoot:federoot@cluster0.iiotc.mongodb.net/?retryWrites=true&w=majority')
    await mongo.connect()
    const users = await mongo.db('ecommerce').collection('usuarios').find({}).toArray()
    console.log(users)
    
}

ejecutar()