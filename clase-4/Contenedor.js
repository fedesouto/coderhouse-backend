const fs = require("fs");

class Contenedor {
  constructor(fileName) {
    this.fileName = fileName;
  }

  async getAll() {
    //retorna array de objetos
    try {
      const data = await fs.promises.readFile(this.fileName, "utf-8");
      const array = await JSON.parse(data);
      return array
    } catch (error) {
      return error;
    }
  }

  getNextId(items) {
    const nextId = items[items.length - 1].id + 1
    return nextId;
  }

  async save(objeto) {
    //guarda en archivo y retorna el id
    try {
      const array = await this.getAll();
      if (!array.length) {
        objeto.id = 1;
        await fs.promises.writeFile(this.fileName, JSON.stringify([objeto]));
      } else {
        objeto.id = this.getNextId(array)
        await fs.promises.writeFile(
          this.fileName,
          JSON.stringify([...array, objeto])
        );
      }
      console.log("Se agregó el item con Id: ", objeto.id)
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    //retorna objeto
    try {
      const array = await this.getAll();
      if (!array.length) throw new Error("El archivo está vacío");
      const objeto = array.filter((item) => item.id == id);
      if (!objeto.length) throw new Error("El ID no existe.");
      else {
        return objeto[0];
      }
    } catch (error) {
      return error;
    }
  }

  async deleteById(id) {
    //elimina un objeto por id
    try {
      const array = await this.getAll();
      if (!array.length) throw new Error("El archivo está vacío");
      const filteredArray = array.filter((item) => item.id != id);
      if (filteredArray.length == array.length)
        throw new Error("El ID no existe.");
      else {
        await fs.promises.writeFile(
          this.fileName,
          JSON.stringify(filteredArray)
        );
      }
      console.log("Se eliminó el item con Id: ", id);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    //elimina todos los objetos
    try {
      await fs.promises.writeFile(this.fileName, "");
      console.log("Se eliminaron todos los items.");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Contenedor;
