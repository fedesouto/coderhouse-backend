const ProductDaoFactory = require('../daos/Product/productDao')
const { PERSISTENCE } = require("../../config");
const Product = require('../dtos/ProductDTO');

class ProductRepo {
  constructor() {
    this.productDao = ProductDaoFactory.createProductDao(PERSISTENCE);
  }
  async getAll() {
    try {
      const dtos = await this.productDao.getAll();
      const chats = dtos.map((dto) => new Product(dto));
      return chats;
    } catch (error) {
      throw new Error("Product Repository Error", error);
    }
  }
  async add(product) {
    try {
      const dto = Product.toDTO(product);
      await this.productDao.addItem(dto);
    } catch (error) {
      throw new Error("Product Repository Error", error);
    }
  }
}

module.exports = ProductRepo
