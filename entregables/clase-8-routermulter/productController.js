class Contenedor {
  constructor() {
    this.data = [];
  }
  getAll() {
    return this.data;
  }
  getNextId(items) {
    const nextId = items[items.length - 1].id + 1;
    return nextId;
  }
  getById(id) {
    const item = this.data.find((element) => element.id === id);
    if (!item) throw new Error("producto no encontrado");
    return item;
  }
  addItem(item) {
    item.id = this.getNextId(this.data);
    this.data.push(item);
  }
  updateItem(id, newData) {
    const item = this.getById(id);
    for (let i in item) {
      if (i !== "id") item[i] = newData[i];
    }
  }
  deleteItem(id) {
    this.data.filter((item) => item.id !== id);
  }
}

const productos = new Contenedor();

productos.data = [
  {
    title: "Escuadra",
    price: 123.45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    id: 1,
  },
  {
    title: "Calculadora",
    price: 234.56,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    id: 2,
  },
  {
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    id: 3,
  },
];

module.exports = productos;
