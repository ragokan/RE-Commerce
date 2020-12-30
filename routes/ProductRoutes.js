import express from "express";
import {
  AddProductToBasket,
  GetOneProduct,
  RemoveProductToBasket,
  GetUserBasket,
} from "../controllers/ProductController.js";
import { LoginRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router.route("/basket").get(LoginRequired, GetUserBasket);

router.route("/:id").get(GetOneProduct);

router.route("/add").post(LoginRequired, AddProductToBasket);

router.route("/remove").post(LoginRequired, RemoveProductToBasket);

export default router;
