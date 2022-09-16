const swaggerJsdoc = require('swagger-jsdoc')

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Api fede",
            description: "Api express con swagger"
        }
    },
    apis: ['../docs/doc.yaml']
}
const specs = swaggerJsdoc(options)
module.exports = specs