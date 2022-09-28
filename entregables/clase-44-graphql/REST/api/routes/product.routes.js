const { Router } = require("express");
const productCtrl = require("../controllers/product.controller");

const router = Router();

router.get("/", productCtrl.getAll);
router.get("/:id", productCtrl.getById);
router.post("/", productCtrl.addOne);
router.put("/:id", productCtrl.update);
router.delete("/:id", productCtrl.delete);

module.exports = router;
