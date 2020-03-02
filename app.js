const express = require("express");
const app = express();

//set the middlewares
app.use("/newpage", () => {
  console.log("middleware running!");
});

//set the routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/newpage", (req, res) => {
  res.send("New Page");
});

//listen to server port 3000
app.listen(3000);
