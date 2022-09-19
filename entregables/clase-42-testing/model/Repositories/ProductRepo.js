const ProductDaoFactory = require("../daos/Product/productDao");
const { PERSISTENCE } = require("../../config");
const Product = require("../dtos/ProductDTO");

class ProductRepo {
  constructor() {
    this.productDao = ProductDaoFactory.createProductDao(PERSISTENCE);
  }
  async get(id) {
    try {
      if (id) {
        const dto = await this.productDao.getById(id);
        const product = new Product(dto);
        return product;
      } else {
        const dtos = await this.productDao.getAll();
        const products = dtos.map((dto) => new Product(dto));
        return products;
      }
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
  async delete(id) {
    try {
      return await this.productDao.deleteItem(id);
    } catch (error) {
      throw new Error("Product Repository Error", error);
    }
  }
  async update(id, data) {
    try {
      const dto = Product.toDTO(data);
      return await this.productDao.updateItem(id, dto);
    } catch (error) {
      throw new Error("Product Repository Error", error);
    }
  }
}

module.exports = ProductRepo;
