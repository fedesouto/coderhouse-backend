class Product {
    constructor(dto) {
        this._id = dto._id
        this.title = dto.title
        this.price = Number(dto.price)
        this.thumbnail = dto.thumbnail
    }
    static toDTO(product) {
        return {
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail
        }
    }
}

module.exports = Product