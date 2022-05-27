const fs = require("fs");

class Chat {
  constructor(fileName) {
    this.fileName = fileName;
  }

  async getAll() {
    //retorna array de objetos
    try {
      const data = await fs.promises.readFile(this.fileName, "utf-8");
      const array = await JSON.parse(data);
      return array;
    } catch (error) {
      return error;
    }
  }

  getNextId(items) {
    const nextId = items[items.length - 1].id + 1;
    return nextId;
  }

  async save(objeto) {
    //guarda en archivo y retorna el id
    try {
      const array = await this.getAll();
      objeto.timestamp = new Date().toLocaleString()
      if (!array.length) {
        objeto.id = 1;
        await fs.promises.writeFile(this.fileName, JSON.stringify([objeto]));
      } else {
        objeto.id = this.getNextId(array);
        await fs.promises.writeFile(
          this.fileName,
          JSON.stringify([objeto, ...array])
        );
      }
      console.log("Se agregó el item con Id: ", objeto.id);
    } catch (error) {
      return error;
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


const chat = new Chat('../chat.txt')


module.exports = chat;
