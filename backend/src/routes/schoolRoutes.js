const express = require("express");
const router = express.Router();

const School = require("../models/School");

router.get("/", async (req, res) => {
  try {
    const data = await School.find();

    console.log("DATA:", data);

    res.json(data);
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;