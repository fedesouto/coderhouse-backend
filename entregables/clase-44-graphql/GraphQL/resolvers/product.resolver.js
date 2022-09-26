const productService = require("../../services/product.service");

const getAllProducts = async () => {
  console.log("recibido");

  try {
    return await productService.getAll();
  } catch (error) {
    throw error;
  }
};

const getProduct = async (id) => {
  try {
    return await productService.getOne(id);
  } catch (error) {
    throw error;
  }
};

const addProduct = async (args) => {
  const { product } = args;
  const { title, price, thumbnail } = product;
  try {
    return await productService.addNew({ title, price, thumbnail });
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (args) => {
  const { product } = args;
  const { id, title, price, thumbnail } = product;
  try {
    return await productService.update(id, { title, price, thumbnail });
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    return await productService.delete(id);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProducts,
  getProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
