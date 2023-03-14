const mongodb = require(`mongodb`);
const data = require("bootstrap/js/src/dom/data");
const mongoClient = mongodb.MongoClient;
//sets up the client that we will need to establish a connection

let database

const connectDB = async () => {
  const client = await mongoClient.connect(`mongodb://localhost:27017`)
  //localhost:27017 is the url port specified in the mongodb docs that connects to the mongodb server

  database = client.db(`blog`)
  //mongoClient is a connection pool, meaning it can connect to multiple databases. By running the db(), we can specify the database we want to use by name, then store that within the database variable
}
//the connect method is a promise so placing it in an async function allows us to handle the returned promise

const getDB = () => {
  if (!database)
    throw {message: `No DB Connection Established!`}
  //DB connection check

  return database
  //this function returns the data stored within the collection specified in the connect function
}

module.exports = {
  connectDB: connectDB,
  getDB: getDB
}