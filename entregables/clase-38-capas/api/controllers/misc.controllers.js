const { fork } = require("child_process");
const createRandomProductList = require("../../services/randomProducts.service");

const cantCpus = require("os").cpus().length;

const miscController = {};

miscController.getServerInfo = (_req, res, _next) => {
  const data = {
    argumentosDeEntrada: process.argv,
    os: process.platform,
    nodeVersion: process.version,
    rss: process.memoryUsage.rss(),
    execPath: process.execPath,
    processId: process.pid,
    carpeta: process.cwd(),
    cpus: cantCpus,
  };
  res.json(data);
};

miscController.getRandomData = (req, res, _next) => {
  const cant = Number(req.query.cant) || 100000000;
  const forked = fork("./utils/apirandoms.js");
  forked.send(cant);
  forked.on("message", (message) => {
    res.json(message);
  });
};

miscController.getRandomProducts = (_req, res, _next) => {
  const products = createRandomProductList();
  res.json(products);
};

module.exports = miscController;
