require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const collegeRoutes = require("./routes/collegeRoutes");
const universityRoutes = require("./routes/universitiesRoutes");
const schoolRoutes = require("./routes/schoolRoutes");
const juniorCollegeRoutes = require("./routes/juniorCollegeRoutes");

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
app.use("/api/universities", universityRoutes);
app.use("/api/schools", schoolRoutes);
app.use("/api/junior-colleges", juniorCollegeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});