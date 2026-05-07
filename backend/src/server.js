require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const collegeRoutes = require("./routes/collegeRoutes");

const app = express();

// Connect DB FIRST
connectDB();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.use("/api/colleges", collegeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});