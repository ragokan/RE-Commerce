import express from "express";
import { GetProducts } from "../controllers/SellerController.js";
import { LoginRequired, SellerRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router.route("/products").get(LoginRequired, SellerRequired, GetProducts);

export default router;
