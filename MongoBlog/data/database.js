const mongodb = require(`mongodb`);
const mongoClient = mongodb.MongoClient;
//sets up the client that we will need to establish a connection

let database

const connect = async () => {
  const client = await mongoClient.connect(`mongodb://localhost:27017`)
  //localhost:27017 is the url port specified in the mongodb docs that connects to the mongodb server

  database = client.db(`blog`)
  //mongoClient is a connection pool, meaning it can connect to multiple databases. By running the db(), we can specify the database we want to use by name, then store that within the database variable
}
//the connect method is a promise so placing it in an async function allows us to handle the returned promise

const getDB = () => {
  return database
  //this function returns the data stored within the collection specified in the connect function
}