import express from "express";
import { GetOneProduct } from "../controllers/ProductController.js";
import { LoginRequired } from "../middleware/UserAuth.js";

const router = express.Router();

router.route("/:id").get(GetOneProduct);

export default router;
