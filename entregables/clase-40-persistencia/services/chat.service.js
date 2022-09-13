const normalizedChats = require("../utils/chatNormalizer")
const ChatRepo = require('../model/Repositories/ChatRepo')

const chatService = {}
const chatRepo = new ChatRepo()


chatService.getAll = async () => {
    const chats = await chatRepo.getAll()
    return normalizedChats(chats)
}

chatService.addNew = async (new_message) => {
    await chatRepo.add(new_message)
} 

module.exports = chatService