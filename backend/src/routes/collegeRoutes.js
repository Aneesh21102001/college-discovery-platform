const express = require("express");
const router = express.Router();

const College = require("../models/College");

router.get("/", async (req, res) => {
  try {
    const q = req.query.q || "";
    const location = req.query.location || "";

    let query = {};

    if (q) {
      query.name = {
        $regex: q,
        $options: "i",
      };
    }

    if (location) {
      query.location = {
        $regex: location,
        $options: "i",
      };
    }

    const colleges = await College.find(query);

    res.json(colleges);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const college = await College.findOne({
      slug: req.params.slug,
    });

    if (!college) {
      return res.status(404).json({
        message: "College not found",
      });
    }

    res.json(college);
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;