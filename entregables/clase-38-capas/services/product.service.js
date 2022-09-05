const productDao = require("../models/daos/productDao")

const productService = {}

productService.getAll = async () => {
    return await productDao.getAll()
}

productService.addNew = async (new_product) => {
    await productDao.addItem(new_product)
}

module.exports = productService