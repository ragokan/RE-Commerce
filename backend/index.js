import express from "express";
import cors from "cors";
import path from "path";
import formData from "express-form-data";
// Dot Env + Database
import "./utils/Environment.js";
import "./utils/Database.js";
import { ErrorHandler, NotFound } from "./utils/ErrorHandler.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(formData.parse());

// Routes
import routing from "./routing.js";
routing(app);

// Middleware
app.use(NotFound);
app.use(ErrorHandler);

// Production
if (process.env.NODE_ENV === "production") {
  var __dirname = path.resolve();
  app.use(express.static("frontend/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`RE-Commerce is running now at port ${PORT}!`));
