const productService = require("../../services/product.service");
const logger = require("../../utils/logger");

const productCtrl = {};

productCtrl.getAll = async (_req, res, next) => {
  try {
    const products = await productService.getAll();
    res.json(products);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

productCtrl.getById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await productService.getOne(id);
    res.json(product);
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

productCtrl.addOne = async (req, res, next) => {
  try {
    const product = req.body;
    await productService.addNew(product);
    res.json({ added: "new product" });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

productCtrl.update = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await productService.update(id, data);
    res.json({ updated: `product id: ${id}` });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

productCtrl.delete = async (req, res, next) => {
  try {
    const id = req.params.id;
    await productService.delete(id);
    res.json({ deleted: `product id: ${id}` });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

module.exports = productCtrl
