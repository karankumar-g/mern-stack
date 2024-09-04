const { MongoClient } = require("mongodb");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb+srv://karankumar:karan2909@cluster0.viptk.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "sample_mflix";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("movies");
  const data = await db.collection("movies").find({}).toArray();
  console.log(data);

  // the following code examples can be pasted here...

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
