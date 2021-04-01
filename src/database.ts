const { MongoMemoryServer } = require("mongodb-memory-server");
const { MongoClient } = require("mongodb");
const data = require("./data");

let database = null;

const mongo = new MongoMemoryServer();

export default class Database {
  async startDatabase() {
    const mongoDBURL = await mongo.getUri();
    const connection = await MongoClient.connect(mongoDBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    //Seed Database
    if (!database) {
      database = connection.db();
      await database.collection("users").insertMany(data.Users);
    }

    return database;
  }

  async stopDatabase() {
    await mongo.stop();
  }
}
