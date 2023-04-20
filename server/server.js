const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
// const next = require("next");

connectDB();
const app = express();

const port = 5000;
// const port = process.env.PORT || 5000;

//middleware
app.use(express.json()); //parser
// app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/restaurants", require("./routes/restaurantRoutes"));
app.use(errorHandler);

app.get("/api", (req, res) => {
  res.json({ test: "test 2", cool: "test3" });
});

app.listen(port, () => {
  console.log("node connected");
});
