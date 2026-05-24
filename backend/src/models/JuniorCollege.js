const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    slug: String,
    name: String,
    location: String,
    stream: String,
    rating: String,
  },
  {
    collection: "juniorcolleges",
  }
);

module.exports = mongoose.model("JuniorCollege", schema);