import express from "express";
import {
  AddProductToBasket,
  GetOneProduct,
  GetAllProducts,
  RemoveProductToBasket,
  GetUserBasket,
  ClearBasket,
  AddProductReview,
  FavoriteProduct,
} from "../controllers/ProductController.js";
import { LoginRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router.route("/all").get(GetAllProducts);

router.route("/:id").get(GetOneProduct);

router.route("/basket").get(LoginRequired, GetUserBasket);

router.route("/add").post(LoginRequired, AddProductToBasket);

router.route("/remove").post(LoginRequired, RemoveProductToBasket);

router.route("/clear").post(LoginRequired, ClearBasket);

router.route("/:id/review").post(LoginRequired, AddProductReview);

router.route("/favorite").post(LoginRequired, FavoriteProduct);

export default router;
