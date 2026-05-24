const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  slug: String,
  name: String,
  location: String,
  board: String,
  rating: String,
});

module.exports = mongoose.model("School", schema);