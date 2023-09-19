const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "foodozer";

// Creating instance of mongodb client
const client = new MongoClient(url);

module.exports = { client, dbName };
