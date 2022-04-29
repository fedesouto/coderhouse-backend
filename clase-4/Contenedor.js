const fs = require("fs");

class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
  }

  async getAll() {
    //retorna array de objetos
    try {
      const data = await fs.promises.readFile(this.fileName, "utf-8");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async save(objeto) {
    //guarda en archivo y retorna el id
    try {
      const data = await this.getAll();
      if (!data) {
        objeto.id = 1;
        await fs.promises.writeFile(this.fileName, JSON.stringify([objeto]));
      } else {
        const array = JSON.parse(data);
        objeto.id = array.length + 1;
        await fs.promises.writeFile(
          this.fileName,
          JSON.stringify([...array, objeto])
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
  getById(id) {
    //retorna objeto
  }
  deleteById(id) {
    //elimina un objeto por id
  }
  deleteAll() {
    //elimina todos los objetos
  }
}

module.exports = Contenedor;
