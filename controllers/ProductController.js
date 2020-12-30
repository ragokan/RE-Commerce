import User from "../models/User.js";
import Product from "../models/Product.js";
import Async from "../middleware/Async.js";
import ErrorObject from "../utils/ErrorObject.js";
import BasketValidation from "../validation/BasketValidation.js";

// Get /product/id
export const GetOneProduct = Async(async (req, res, next) => {
  const product = await Product.findById(req.params.id).populate("seller", ["fullname"]);
  if (!product)
    return next(new ErrorObject("The product you are looking for is not found!", 404, 201));

  res.status(200).json(product);
});

// Post /product/add
export const AddProductToBasket = Async(async (req, res, next) => {
  const { error } = BasketValidation(req.body);
  if (error) return next(new ErrorObject(error.details[0].message, 400));
  let { product } = req.body;

  let user = await User.findById(req.user._id);

  if (user.basket.length > 0) {
    let itemIndex = user.basket.findIndex((item) => String(item.product) === String(product));
    if (itemIndex === -1) user.basket.push({ product, quantity: 1 });
    else user.basket[itemIndex].quantity++;
  } else await user.basket.push({ product, quantity: 1 });

  await user.save();
  res.status(200).json(user);
});
