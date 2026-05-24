const express = require("express");
const router = express.Router();

const JuniorCollege = require("../models/JuniorCollege");

router.get("/", async (req, res) => {
  try {
    const data = await JuniorCollege.find();

    res.json(data);
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;