
const ProductRepo = require('../model/Repositories/ProductRepo')

const productService = {}
const productRepo = new ProductRepo()

productService.getAll = async () => {
    const products = await productRepo.getAll()
    return products
}

productService.addNew = async (new_product) => {
    await productRepo.add(new_product)
}

module.exports = productService