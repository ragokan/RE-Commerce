import express from "express";
import { GetProducts, AddProduct, UpdateProduct } from "../controllers/SellerController.js";
import { LoginRequired, SellerRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router
  .route("/products")
  .get(LoginRequired, SellerRequired, GetProducts)
  .post(LoginRequired, SellerRequired, AddProduct);

router.route("/products/:id").patch(LoginRequired, SellerRequired, UpdateProduct);

export default router;
