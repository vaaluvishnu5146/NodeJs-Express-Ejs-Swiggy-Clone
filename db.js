const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
let db = undefined;

// Database Name
const dbName = "foodozer";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  db = client.db(dbName);
  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

module.exports = { client, dbName };
