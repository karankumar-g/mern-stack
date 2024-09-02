var express = require("express");
var app = express();

app.get("/myname", (request, response) => {
  response.json({ message: "Karan" });
});

app.listen(8080);
