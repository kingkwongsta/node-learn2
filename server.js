const express = require("express");
const connectDB = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
// const dotenv = require("dotenv").config();

// connectDB();
const app = express();

const port = 5000;
// const port = process.env.PORT || 5000;

//middleware
app.use(express.json()); //parser
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log("hello");
});
