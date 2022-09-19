const { Router } = require("express");
const miscController = require("../controllers/misc.controllers");

const miscRouter = Router();

miscRouter.get("/productos", miscController.getRandomProducts);

miscRouter.get("/randoms", miscController.getRandomData);

miscRouter.get('/info', miscController.getServerInfo)

module.exports = miscRouter;