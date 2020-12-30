import express from "express";
import {
  GetProducts,
  AddProduct,
  UpdateProduct,
  DeleteProduct,
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

export default router;
