const express = require("express");
const router = express.Router();

const College = require("../models/College");

router.get("/", async (req, res) => {
  try {
    const colleges = await College.find();

    res.json(colleges);
  } catch (error) {
    console.log(error); // IMPORTANT

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;