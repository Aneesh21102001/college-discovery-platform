const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  slug: String,
  name: String,
  location: String,
  rating: String,
  courses: String,
  type: String,
});

module.exports = mongoose.model("University", schema);