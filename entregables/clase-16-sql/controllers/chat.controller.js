const Contenedor = require("../Contenedor");
const path = require("path");

const options = {
  client: "sqlite3",
  connection: {
    filename: path.join(process.cwd(), "db", "ecommerce.sqlite"),
  },
  useNullAsDefault: true,
};

const chatController = new Contenedor("chats", options);

/* const getAll = async (req, res) => {
  const data = await chatController.getAll();
  res.json(data);
}; */

module.exports = chatController;
