const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    // console.log(
    //   "Database is connected - ",
    //   connect.connection.host,
    //   connect.connection.name
    // );
    const connect2 = await mongoose.connect(process.env.DB2);
    console.log(
      "Database is connected - ",
      connect2.connection.host,
      connect2.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
