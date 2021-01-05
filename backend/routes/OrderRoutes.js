import express from "express";
import { GetOrders } from "../controllers/OrderController.js";
import { LoginRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router.route("/").get(LoginRequired, GetOrders);

export default router;
