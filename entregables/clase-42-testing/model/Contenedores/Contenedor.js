const { MongoClient } = require("mongodb");
const logger = require('../../utils/logger')

class ContenedorMongoDB {
  constructor(connectionString, db, collection) {
    this.mongo = new MongoClient(connectionString);
    this.db = db;
    this.collection = collection;
  }
  async connect() {
    try {
      await this.mongo.connect();
      console.log("Connected to database");
    } catch (error) {
      logger.error(`Error: ${error.message}`)
      throw error;
    }
  }
  async getAll() {
    try {
      const data = await this.mongo
        .db(this.db)
        .collection(this.collection)
        .find({})
        .toArray();
      return data;
    } catch (error) {
      logger.error(`Error: ${error.message}`)
      throw error;
    }
  }
  async getById(id) {
    try {
      const data = await this.mongo
        .db(this.db)
        .collection(this.collection)
        .findOne({ _id: id });
      if(!data) throw new Error(`No se encontró el item con ID ${id}`)
      return data;
    } catch (error) {
      logger.error(`Error: ${error.message}`)
      throw error;
    }
  }
  async find(key, value) {
    try {
      const data = await this.mongo
        .db(this.db)
        .collection(this.collection)
        .findOne({ [key]: value });
      return data;
    } catch (error) {
      logger.error(`Error: ${error.message}`)
      throw error;
    }
  }
  async addItem(data) {
    try {
      await this.mongo.db(this.db).collection(this.collection).insertOne(data);
      return data.id;
    } catch (error) {
      logger.error(`Error: ${error.message}`)
      throw error;
    }
  }
  async updateItem(id, data) {
    try {
      return await this.mongo
        .db(this.db)
        .collection(this.collection)
        .updateOne({ _id: id }, { $set: data });
    } catch (error) {
      logger.error(`Error: ${error.message}`)
      throw error;
    }
  }
  async deleteItem(id) {
    try {
      return await this.mongo
        .db(this.db)
        .collection(this.collection)
        .deleteOne({ _id: id });
    } catch (error) {
      logger.error(`Error: ${error.message}`)
      throw error;
    }
  }
}

module.exports = ContenedorMongoDB;
