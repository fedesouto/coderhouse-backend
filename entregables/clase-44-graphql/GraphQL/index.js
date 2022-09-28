const fs = require('fs')
const path = require('path')
const {buildSchema} = require('graphql')
const {graphqlHTTP} = require('express-graphql')
const {Router} = require('express')
const {getAllProducts, getProduct, addProduct, updateProduct, deleteProduct} = require('./resolvers/product.resolver')

const stringSchema = fs.readFileSync(path.join(process.cwd(), 'GraphQL', 'schemas', 'product.gql')).toString();
const schema = buildSchema(stringSchema)

const gqlMiddleware = graphqlHTTP({
    schema,
    rootValue: {
        getAllProducts,
        getProduct,
        addProduct,
        updateProduct,
        deleteProduct
    },
    graphiql: true,
});

const gqlRouter = Router()

gqlRouter.use('/', gqlMiddleware)

module.exports = gqlRouter
