const StringsDaoMem = require("../models/dao/StringDaoMem")

class StringService {
    constructor() {
        this.stringsDao = new StringsDaoMem()
    }

    getAll() {
        return this.stringsDao.get()
    }
    addNew(string) {
        return this.stringsDao.save(string)
    }
}

module.exports = StringService