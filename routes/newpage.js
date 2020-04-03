const express = require("express");
const router = express.Router();
const Page = require("../models/_Newpage");

router.get("/", (req, res) => {
  res.send("New Page");
});

router.post("/", (req, res) => {
  const page = new Page({
    title: req.body.title,
    description: req.body.description
  });
  page
    .save()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.json({ message: err });
    });
});

module.exports = router;
