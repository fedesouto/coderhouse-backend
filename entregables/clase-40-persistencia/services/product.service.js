const { PERSISTENCE } = require("../config")
const ProductDaoFactory = require("../model/daos/Product/productDao")
const ProductDTO = require("../model/dtos/ProductDTO")

const productDao = ProductDaoFactory.createProductDao(PERSISTENCE)

const productService = {}

productService.getAll = async () => {
    const products = await productDao.getAll()
    const productsDtos = products.map(product => new ProductDTO(product))
    return productsDtos
}

productService.addNew = async (new_product) => {
    await productDao.addItem(new_product)
}

module.exports = productService