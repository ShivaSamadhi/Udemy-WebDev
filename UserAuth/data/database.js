const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

const connectDB = async () => {
  const client = await MongoClient.connect(
    'mongodb://localhost:27017'
  );
  database = client.db('auth-demo');
}

const getDB = () => {
  if (!database) {
    throw { message: `DB Connection Failed!` };
  }
  return database;
}

module.exports = {
  connectDB: connectDB,
  getDb: getDB,
};
