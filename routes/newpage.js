const express = require("express");
const router = express.Router();
const Page = require("../models/Newpage");

router.get("/", (req, res) => {
  res.send("New Page");
});

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
