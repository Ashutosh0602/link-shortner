const mongoose = require("mongoose");

const URLSchema = new mongoose.Schema({
  urlCode: String,
  longUrl: String,
  shortUrl: String,
  date: {
    type: String,
    default: Date.now,
  },
});

const url = new mongoose.model("TestURL", URLSchema);

module.exports = url;
