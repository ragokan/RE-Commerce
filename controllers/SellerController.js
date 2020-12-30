import Product from "../models/Product.js";
import Async from "../middleware/Async.js";
import ErrorObject from "../utils/ErrorObject.js";

// Get /seller/products
export const GetProducts = Async(async (req, res, next) => {
  let products;
  if (req.user.type === "admin") {
    products = await Product.find();
  } else if (req.user.type === "seller") {
    products = await Product.find({ seller: req.user._id });
  }
  res.status(200).json(products);
});
