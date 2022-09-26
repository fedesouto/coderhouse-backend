const ChatMongoDAO = require("./chatMongo");

class ChatDaoFactory {
    static createChatDao(persistence) {
        switch (persistence) {
            case "MONGO":
                return ChatMongoDAO.getInstance();
            default: 
                throw new Error("Chat error / persistence")
        }
    }
}



module.exports = ChatDaoFactory;
