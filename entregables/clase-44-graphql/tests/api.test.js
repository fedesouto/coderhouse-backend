const request = require('supertest')('http://localhost:8080')
const expect = require('chai').expect
const generateProduct = require('./faker')

describe('REST API test', () => {
    describe('Get all products', () => {
        it('Response status equal to 200', async () => {
            const response = await request.get('/api/products')
            expect(response.status).to.eql(200)
        })
        it('Response body is an array', async () => {
            const response = await request.get('/api/products')
            expect(response.body).to.be.a('array')
        })
    })
    describe('Add a new product', () => {
        it('Response body is { added: new product }', async () => {
            const product = generateProduct()
            const response = await request.post('/api/products').send(product)
            expect(response.body).to.eql({added: 'new product'})
        })
    })
    describe('Delete a product', () => {
        it('Response body has key "deleted"', async () => {
            const response = await request.delete('/api/products/6329e36c82b8bdcc46bec696')
            expect(response.body).to.have.all.keys('deleted')
        })
        it('Wrong ID returns status 404', async () => {
            const response = await request.delete('/api/products/6329dc9694ca101d3127ea75')
            expect(response.status).to.eql(404)
        })
    })
    describe('Update a product', () => {
        it('Response body has key "updated"', async () => {
            const product = generateProduct()
            const response = await request.put('/api/products/62c5b84f89f8dce60338f708').send(product)
            expect(response.body).to.have.all.keys('updated')
        })
    }) 
})

