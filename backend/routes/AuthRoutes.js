import express from "express";
import { Register, Login, Logout } from "../controllers/AuthController.js";
import { LoginRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").post(LoginRequired, Logout);

export default router;
