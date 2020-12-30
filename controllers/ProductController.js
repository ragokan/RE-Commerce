import User from "../models/User.js";
import Product from "../models/Product.js";
import Async from "../middleware/Async.js";
import ErrorObject from "../utils/ErrorObject.js";

// Get /product/id
export const GetOneProduct = Async(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate("seller", ["fullname"]);
  if (!product)
    return next(new ErrorObject("The product you are looking for is not found!", 404, 201));

  res.status(200).json(product);
});
