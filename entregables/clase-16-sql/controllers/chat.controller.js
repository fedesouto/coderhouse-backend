const Contenedor = require("../Contenedor");

const options = {
  client: "sqlite3",
  connection: {
    filename: `${process.cwd()}/db/ecommerce.sqlite`
  },
  useNullAsDefault: true
};

const chatController = new Contenedor('chats', options)

const getAll = async (req, res) => {
    const data = await chatController.getAll()
    res.json(data)
}

module.exports = {getAll}