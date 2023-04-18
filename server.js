const express = require("express");
// const dotenv = require("dotenv").config();

const app = express();

const port = 5000;
// const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("hello");
});

app.get("/api/contacts", (req, res) => {
  res.send("testing testing");
});
