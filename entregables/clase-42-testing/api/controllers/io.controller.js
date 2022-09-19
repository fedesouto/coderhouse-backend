const chatService = require("../../services/chat.service");
//const productService = require("../../services/product.service");
const logger = require("../../utils/logger");

const ioController = async (socket, ioServer) => {
  logger.info(`New connection - ${socket.id}`);

  //socket.emit("init", await productService.getAll());

  socket.emit("chat_init", await chatService.getAll());

  /*   socket.on("new_product", async (new_product) => {
    await productService.addNew(new_product);
    ioServer.sockets.emit("product_update", await productService.getAll());
  }); */

  socket.on("new_message", async (new_message) => {
    await chatService.addNew(new_message);
    ioServer.sockets.emit("chat_update", await chatService.getAll());
  });
};

module.exports = ioController;
