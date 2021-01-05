import express from "express";
import { GetOrders, GetAllOrders } from "../controllers/OrderController.js";
import { LoginRequired, SellerRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router.route("/").get(LoginRequired, GetOrders);

router.route("/all").get(LoginRequired, SellerRequired, GetAllOrders);

export default router;
