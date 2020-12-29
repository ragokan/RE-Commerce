import express from "express";
const app = express();

// Dot Env + Database
import "./utils/Environment.js";
import "./utils/Database.js";

// Middleware
app.use(express.json());

// Routes
// app.use("/api/routername", require("./routes/routerpath"));

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`RE-Commerce is running now at port ${PORT}!`));
