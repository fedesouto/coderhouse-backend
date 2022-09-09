class ProductDTO {
    constructor(data) {
        this.title = data.title
        this.price = Number(data.price)
        this.thumbnail = data.thumbnail
    }
}

module.exports = ProductDTO