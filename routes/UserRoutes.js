import express from "express";
import { GetUser } from "../controllers/UserController.js";
import { LoginRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router.route("/me").get(LoginRequired, GetUser);

export default router;
