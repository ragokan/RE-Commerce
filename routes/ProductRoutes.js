import express from "express";
import { AddProductToBasket, GetOneProduct } from "../controllers/ProductController.js";
import { LoginRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router.route("/:id").get(GetOneProduct);

router.route("/add").post(LoginRequired, AddProductToBasket);

export default router;
