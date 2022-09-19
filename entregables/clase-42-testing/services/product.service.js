
const ProductRepo = require('../model/Repositories/ProductRepo')

const productService = {}
const productRepo = new ProductRepo()

productService.getAll = async () => {
    const products = await productRepo.get()
    return products
}

productService.getOne = async (id) => {
    const product = await productRepo.get(id)
    return product
}

productService.addNew = async (new_product) => {
    await productRepo.add(new_product)
}

productService.update = async (id, data) => {
    await productRepo.update(id, data)
}

productService.delete = async (id) => {
    await productRepo.delete(id)
}

module.exports = productService