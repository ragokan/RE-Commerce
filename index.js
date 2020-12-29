import express from "express";
// Dot Env + Database
import "./utils/Environment.js";
import "./utils/Database.js";
import { ErrorHandler, NotFound } from "./utils/ErrorHandler.js";

const app = express();
app.use(express.json());

// Routes
import AuthRoutes from "./routes/AuthRoutes.js";
app.use("/api/auth", AuthRoutes);

// Middleware
app.use(NotFound);
app.use(ErrorHandler);

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`RE-Commerce is running now at port ${PORT}!`));
