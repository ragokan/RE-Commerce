import express from "express";
import mongoose from "mongoose";
const app = express();

// Dot Env + Database
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, () =>
  console.log("Succesfully connected to the database...!")
);

// Middleware
app.use(express.json());

// Routes
app.use("/api/routername", require("./routes/routerpath"));

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is currently running on port ${PORT}...!`));
