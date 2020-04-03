const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

require("dotenv/config");

app.use(bodyParser.json());
const newpageroute = require("./routes/newpage");

app.use("/newpage", newpageroute);

//set the routes
app.get("/", (req, res) => {
  res.send("Home Page");
});

//connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//listen to server port 3000
app.listen(3000);
