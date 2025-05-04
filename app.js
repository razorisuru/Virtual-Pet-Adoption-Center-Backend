require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors     = require('cors');
const petRoutes = require("./routes/petRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

// Mount API routes
app.use("/api", petRoutes);

module.exports = app;
