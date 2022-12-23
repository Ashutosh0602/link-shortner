const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./db.env" });

const DB_URI = `mongodb+srv://natours:${process.env.PASSWORD}@cluster0.kylf9c1.mongodb.net/?retryWrites=true&w=majority`;
// const DB_URI = `mongodb+srv://natours:${process.env.PASSWORD}@cluster0.kylf9c1.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

module.exports = connection;
