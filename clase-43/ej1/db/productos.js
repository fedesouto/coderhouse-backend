const productos = []
let id = 0

const createProducto = (product) => {
    const new_product = {
        id,
        ...product
    }
    id ++
    productos.push(new_product)
    return product
}

module.exports = {productos, createProducto}