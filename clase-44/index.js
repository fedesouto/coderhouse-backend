const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const {buildSchema} = require('graphql')
const fs = require('fs')
const { getRecordatorios, createRecordatorio } = require('./resolvers')

const schemaString = fs.readFileSync('./schema/recordatorios.gql').toString()
const schema = buildSchema(schemaString)

const graphqlMiddleware = graphqlHTTP({
    schema: schema,
    rootValue: {
        getRecordatorios: getRecordatorios,
        createRecordatorio: createRecordatorio
    },
    graphiql: true
})

const app = express()

app.use('/graphql', graphqlMiddleware)

app.listen(8080, () => console.log('Server listening'))