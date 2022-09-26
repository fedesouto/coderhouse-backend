const { PERSISTENCE } = require("../../config");
const Chat = require("../DTOs/ChatDTO");
const ChatDaoFactory  = require("../daos/Chat/chatDao");

class ChatRepo {
  constructor() {
    this.chatDao = ChatDaoFactory.createChatDao(PERSISTENCE)
  }
  async getAll() {
    try {
      const dtos = await this.chatDao.getAll();
      const chats = dtos.map((dto) => new Chat(dto));
      return chats;
    } catch (error) {
      throw new Error("Chat Repository Error", error);
    }
  }
  async add(chat) {
    try {
      const dto = Chat.toDTO(chat);
      await this.chatDao.addItem(dto);
    } catch (error) {
      throw new Error("Chat Repository Error", error);
    }
  }
}

module.exports = ChatRepo;
