const chatDao = require("../models/daos/chatDao")
const normalizedChats = require("../utils/chatNormalizer")

const chatService = {}

chatService.getAll = async () => {
    return normalizedChats(await chatDao.getAll())
}

chatService.addNew = async (new_message) => {
    await chatDao.addItem(new_message)
} 

module.exports = chatService