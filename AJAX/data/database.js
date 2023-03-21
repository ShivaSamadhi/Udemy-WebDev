const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

const connectDB = async () => {
  const client = await MongoClient.connect('mongodb://localhost:27017');

  database = client.db('file-demo');
}

function getDb() {
  if (!database) {
    throw { message: 'Database connection not established!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connect,
  getDb: getDb
};
