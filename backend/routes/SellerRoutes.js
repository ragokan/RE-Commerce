import express from "express";
import {
  GetProducts,
  AddProduct,
  UpdateProduct,
  DeleteProduct,
  GetSellersProducts,
} from "../controllers/SellerController.js";
import { LoginRequired, SellerRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router
  .route("/products")
  .get(LoginRequired, SellerRequired, GetProducts)
  .post(LoginRequired, SellerRequired, AddProduct);

router
  .route("/products/:id")
  .patch(LoginRequired, SellerRequired, UpdateProduct)
  .delete(LoginRequired, SellerRequired, DeleteProduct);

router.route("/productsOf/:id").get(GetSellersProducts);

export default router;
