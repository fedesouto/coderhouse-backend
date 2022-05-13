const { Router } = require("express");
const productos = require("./productController");

const router = Router();

router.get("/", (req, res) => {
  const data = productos.getAll();
  res.json(data);
});

router.get("/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const data = productos.getById(productId);
  res.json(data);
});

router.post("/", (req, res) => {
  const data = req.body;
  productos.addItem(data);
  res.json({ producto: "se agrego un nuevo producto" });
});

router.put("/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  const data = req.body;
  productos.updateItem(productId, data)
  res.json({ producto: "se actualizo el producto" });
});

router.delete("/:productId", (req, res) => {
  const productId = parseInt(req.params.productId);
  productos.deleteItem(productId);
  res.json({ producto: "se elimino el producto" });
});

module.exports = router;
