var express = require("express");
var app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Karan" });
});

app.post("/", (request, response) => {
  response.json({ message: "Batman Gopi" });
});
app.post("/logins", (request, response) => {
  // let email = request["query"]["email"];
  // let pass = request["query"]["password"];
  let { email, password } = request["query"];

  if (email == "admin@gmail.com" && password == "admin") {
    response.json({ Message: "You have logged in success" });
  } else {
    response.json({ Message: "Credentials failed" });
  }
});

//   response.json({ email: email, password: pass });
// });

app.post("/register", (request, response) => {
  let { name, email, password, address } = request.body;
  if (!name || !email || !password || !address) {
    response.json({ message: "Enter all the details" });
  } else {
    response.json({ message: "Register Successfully" });
  }
});

app.post("/add", (request, response) => {
  let { num1, num2 } = request.body;
  if (!num1 || !num2) {
    response.json({ message: "Enter 2 Values" });
  } else {
    response.json({ value: num1 + num2 });
  }
});

const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb+srv://karankumar:karan2909@cluster0.viptk.mongodb.net/";
const client = new MongoClient(url);

// Database Name
const dbName = "office";

app.post("/createTeacher", async (req, res) => {
  let body = req.body;
  let data = {
    name: body["name"],
    email: body["email"],
    password: body["password"],
    address: body["address"],
    mobile_no: body["mobile_no"],
  };
  await client.connect();
  let db = client.db("office");
  await db.collection("teachers").insertOne(data);
  res.status(200).json({ message: "Created New Teacher Record!!" });
});

app.get("/listTeacher", async (req, res) => {
  await client.connect();
  let db = client.db("office");
  const data = await db.collection("teachers").find({}).toArray();
  res.status(200).json(data);
});

app.get("/listteacherbyname/:name", async (req, res) => {
  await client.connect();
  let { name } = req.params;
  let db = client.db("office");
  let list = await db.collection("teachers").find({ name: name }).toArray();
  res.status(200).json(list);
});

app.post("/login", async (req, res) => {
  await client.connect();
  let { name, password } = req.body;
  let db = client.db("office");
  const teachers = await db
    .collection("teachers")
    .find({ name: name, password: password })
    .toArray();
  // const teacher = teachers[0];
  // if (teacher.password === password) {
  //   res.status(200).json({ message: "Login Successful" });
  // } else {
  //   res.status(401).json({ error: "Password incorrect" });
  // }

  if (teachers.length > 0) {
    res.json({ message: "Login Successful" });
  } else {
    res.status(401).json({ error: "Password incorrect" });
  }
});

app.get("/filter", async (req, res) => {
  await client.connect();
  let db = client.db("office");
  var filterList = {};
  let { name, mobile, email } = req.query;

  if (name != undefined) {
    filterList["name"] = name;
  } else if (mobile != undefined) {
    filterList["phone"] = mobile;
  } else if (email != undefined) {
    filterList["email"] = email;
  }

  let list = await db.collection("employee").find(filterList).toArray();
  res.json(list);
});

app.delete("/deleteUserByName", async (req, res) => {
  await client.connect();
  let db = client.db("office");
  let { name } = req.query;
  await db.collection("teachers").deleteOne({ name: name });
  res.json({ msg: "user deleted" });
});

app.put("/updatepwd", async (req, res) => {
  let { name, password } = req.query;
  await client.connect();
  let db = client.db("office");
  await db
    .collection("teachers")
    .updateOne({ password: password }, { $set: { name: "name" } });
  res.json({ msg: "Password is Updated" });
});

app.listen(8080);
