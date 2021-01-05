import express from "express";
import { CreateNewPayment } from "../controllers/PaymentController.js";
import { LoginRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router.route("/create").post(LoginRequired, CreateNewPayment);

export default router;
