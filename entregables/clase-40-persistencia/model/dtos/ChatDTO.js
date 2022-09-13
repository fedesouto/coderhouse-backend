class Chat {
    constructor(dto) {
        this._id = dto._id
        this.author = dto.author
        this.text = dto.text
        this.timestamp = dto.timestamp
    }
    static toDTO(chat) {
        return {
            author: chat.author,
            text: chat.text,
            timestamp: chat.timestamp
        }
    }
}

module.exports = Chat;