const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

const connectDB = async () => {
  const client = await MongoClient.connect('mongodb://localhost:27017');

  database = client.db('blog');
}

const getDB = () => {
  if (!database)
    throw { message: 'Database not connected!' };

  return database;
}

module.exports = {
  connectDB: connectDB,
  getDB: getDB,
};