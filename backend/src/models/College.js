const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema(
  {
    slug: String,
    name: String,
    location: String,
    rating: String,
    fees: String,
    courses: String,
  },
  {
    timestamps: true,
    collection: "colleges",
  }
);

module.exports = mongoose.model("College", collegeSchema);