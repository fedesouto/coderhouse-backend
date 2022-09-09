
function createChatDTO(data) {
    const dto =
    {   _id: data._id,
        author: {
            avatar: data.author.avatar,
            alias: data.author.alias
        },
        text: data.text,
        timestamp: data.timestamp
    }
    return dto
}


module.exports = createChatDTO