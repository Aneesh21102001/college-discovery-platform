const express = require("express");
const router = express.Router();

const University = require("../models/University");

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

    const data = await University.find(query);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const item = await University.findOne({
      slug: req.params.slug,
    });

    if (!item) {
      return res.status(404).json({
        message: "Not found",
      });
    }

    res.json(item);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;