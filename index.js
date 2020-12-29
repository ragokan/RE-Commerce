import express from "express";
// Dot Env + Database
import "./utils/Environment.js";
import "./utils/Database.js";

import { ErrorHandler, NotFound } from "./utils/ErrorHandler.js";

const app = express();

// Middleware
app.use(express.json());
app.use(ErrorHandler);
app.use(NotFound);

// Routes
// app.use("/api/routername", require("./routes/routerpath"));

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`RE-Commerce is running now at port ${PORT}!`));
