const express = require("express");
// const dotenv = require("dotenv").config();

const app = express();

const port = 5000;
// const port = process.env.PORT || 5000;

//middleware
app.use("/api/contacts", require("./routes/contactRoutes"));

app.listen(port, () => {
  console.log("hello");
});
