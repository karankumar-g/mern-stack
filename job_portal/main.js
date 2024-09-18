var express = require("express");
var app = express();
app.use(express.json());

const fileUpload = require("express-fileupload");

const { MongoClient, ObjectId } = require("mongodb");
var cors = require("cors");
app.use(cors());

app.use("/api/", (req, res, next) => {
  let { token } = req.headers;
  if (token == "" || token == undefined) {
    res.status(401).json({ Message: "Please add The Token" });
  } else {
    if (jwt.verify(token, "SECRET")) {
      next();
    } else {
      res.json({ msg: "Provide the Correct Token " });
    }
  }
}); // MIDDLEWARE

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

const url = "mongodb+srv://karankumar:karan2909@cluster0.viptk.mongodb.net/";
const client = new MongoClient(url);

const dbName = "jobportal";

app.post("/api/create_jobs", async (req, res) => {
  let body = req.body;
  let data = {
    name: body["name"],
    company_name: body["company_name"],
    requirements: body["requirements"],
  };
  await client.connect();
  let db = client.db("office");

  await db.collection("jobportal").insertOne(data);
  res.json({ msg: "Successfully created a job" });
});

app.get("/api/list_jobs", async (req, res) => {
  await client.connect();
  let db = client.db("office");
  let data = await db.collection("jobportal").find({}).toArray();
  res.json(data);
});

// app.put("/update_job", async (req, res) => {
//   let { name, requirements } = req.body;
//   await client.connect();
//   let db = client.db("office");
//   await db
//     .collection("jobportal")
//     .updateOne({ name: name }, { $set: { requirements: requirements } });

//   res.json({ msg: "Updated the requirements" });
// });

app.put("/api/update_job", async (req, res) => {
  let { id, name, company, requirements } = req.body;
  await client.connect();
  let db = client.db("office");
  await db.collection("jobportal").updateOne(
    { _id: new ObjectId(id) },
    {
      $set: { requirements: requirements, name: name, company_name: company },
    }
  );

  res.json({ msg: "Updated the requirements" });
});

app.delete("/api/delete_job", async (req, res) => {
  let { id } = req.query;
  await client.connect();
  let db = client.db("office");
  await db.collection("jobportal").deleteOne({ _id: new ObjectId(id) });

  res.json({ msg: "Deleted the Job" });
});

var jwt = require("jsonwebtoken");

app.post("/login", async (req, res) => {
  await client.connect();
  let { name, password } = req.body;
  let db = client.db("office");
  const teachers = await db
    .collection("teachers")
    .find({ name: name, password: password })
    .toArray();
  if (teachers.length > 0) {
    var token = jwt.sign({ name: teachers[0]["name"] }, "SECRET");
    res.json({ message: "Login Successful", token: token });
  } else {
    res.status(401).json({ error: "Password incorrect" });
  }
});

app.post("/register", async (req, res) => {
  let body = req.body;
  let data = {
    name: body["name"],
    email: body["email"],
    password: body["password"],
  };
  await client.connect();
  let db = client.db("office");
  await db.collection("teachers").insertOne(data);
  res.status(200).json({ message: "Created New Teacher Record!!" });
});

app.post("/upload", function (req, res) {
  let file = req.files.img;
  let uploadPath = __dirname + "/uploads/" + file.name;

  file.mv(uploadPath, function (err) {
    if (err) return res.status(500).send(err);

    res.send("File Uploaded!");
  });
});

app.listen(8080);
