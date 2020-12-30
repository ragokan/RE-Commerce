import express from "express";
import { GetProducts, AddProduct } from "../controllers/SellerController.js";
import { LoginRequired, SellerRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router
  .route("/products")
  .get(LoginRequired, SellerRequired, GetProducts)
  .post(LoginRequired, SellerRequired, AddProduct);

export default router;
