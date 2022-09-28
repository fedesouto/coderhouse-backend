const ProductMongoDAO = require("./productMongo");

class ProductDaoFactory {
    static createProductDao(persistence) {
        switch (persistence) {
            case 'MONGO':
                return ProductMongoDAO.getInstance()
            default:
                throw new Error('Product error / persistence')
        }
    }
}

module.exports = ProductDaoFactory