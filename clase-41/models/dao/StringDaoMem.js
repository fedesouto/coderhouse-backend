const toDTO = require("../String")

class StringsDaoMem {
    constructor() {
        this.strings = [] 
    }

    getNextId() {
        const lg = this.strings.length
        return lg ? parseInt(this.strings[lg-1]._id) + 1 : 1
    }


    save(string) {
        const timestamp = Date.now()
        const _id = this.getNextId()
        const stringDTO = toDTO(string,_id, timestamp)
        this.strings.push(stringDTO)
        return string
    } 
    get() {
        return this.strings
    }


}

module.exports = StringsDaoMem