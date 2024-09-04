const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb+srv://karankumar:karan2909@cluster0.viptk.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "office";

async function insertData() {
  let empData = {
    name: "Karan",
    salary: 120000,
    phone: 9345543332,
    email: "karan7890.gk@gmail.com",
  };

  await client.connect();
  const db = client.db(dbName);
  const collection = await db.collection("employee");
  await collection.insertOne(empData);
  console.log("inserted");
}

insertData();
