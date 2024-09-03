var express = require("express");
var app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.json({ message: "Karan" });
});

app.post("/", (request, response) => {
  response.json({ message: "Batman Gopi" });
});
app.post("/login", (request, response) => {
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

app.listen(8080);
