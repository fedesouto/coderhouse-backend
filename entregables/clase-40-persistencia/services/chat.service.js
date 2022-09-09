const { PERSISTENCE } = require("../config")
const ChatDaoFactory = require("../model/daos/Chat/chatDao")
const createChatDTO = require("../model/dtos/ChatDTO")
const normalizedChats = require("../utils/chatNormalizer")

const chatService = {}

const chatDao = ChatDaoFactory.createChatDao(PERSISTENCE)

chatService.getAll = async () => {
    const chats = await chatDao.getAll()
    console.log(chats[0])
    const chatDtos = chats.map(chat => createChatDTO(chat))
    console.log(chatDtos[0])
    return normalizedChats(chatDtos)
}

chatService.addNew = async (new_message) => {
    await chatDao.addItem(new_message)
} 

module.exports = chatService