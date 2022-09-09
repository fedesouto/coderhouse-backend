const UserMongoDAO = require("./userMongo");

class UserDaoFactory {
    static createUserDao(persistence) {
        switch (persistence) {
            case "MONGO": 
                return UserMongoDAO.getInstance()
            default:
                throw new Error('User error / persistence.')
        }
    }
}

module.exports = UserDaoFactory