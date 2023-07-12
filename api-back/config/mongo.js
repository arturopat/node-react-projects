require("dotenv").config();
const mongoose = require("mongoose");
const mongoString = process.env.DB_URI;
// 45:45
function dbConnect() {
  mongoose.connect(mongoString);
  const database = mongoose.connection;

  database.on("error", (error) => {
    console.log(error);
  });

  database.once("connected", () => {
    console.log("Database Connected");
  });
}

module.exports = dbConnect;
