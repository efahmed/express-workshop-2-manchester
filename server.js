const express = require("express");
const app = express();
const handlebars = require("express-handlebars"); //load the package
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/", (req, res) => {
  //res.sendFile(__dirname + "/views/index.html");
  res.render("index", {
    name: "fakher",
    date: new Date().toLocaleString(),
    pagename: "index"
  });
});

app.get("/my-cv", (req, res) => {
  res.render(__dirname + "/views/my-cv.handlebars", {
    pagename: "cv"
  });
});

const SERVER_PORT = process.env.PORT || 3000;
app.listen(SERVER_PORT, function() {
  console.log(
    `Server is listening on port ${SERVER_PORT}. Ready to accept requests!`
  );
});
