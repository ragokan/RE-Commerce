import User from "../models/User.js";
import Product from "../models/Product.js";
import Async from "../middleware/Async.js";
import ErrorObject from "../utils/ErrorObject.js";
import BasketValidation from "../validation/BasketValidation.js";

// Get /product/id
export const GetAllProducts = Async(async (req, res, next) => {
  const products = await Product.find().sort("-createdAt");
  res.status(200).json(products);
});

// Get /product/id
export const GetOneProduct = Async(async (req, res, next) => {
  const product = await Product.findById(req.params.id)
    .populate("seller", ["fullname"])
    .populate({
      path: "reviews",
      populate: { path: "user" },
    });
  if (!product)
    return next(new ErrorObject("The product you are looking for is not found!", 404, 201));

  res.status(200).json(product);
});

// Get /product/basket
export const GetUserBasket = Async(async (req, res, next) => {
  let user = await User.findById(req.user._id).populate({
    path: "basket",
    populate: { path: "product" },
  });
  res.status(200).json(user.basket);
});

// Post /product/add
export const AddProductToBasket = Async(async (req, res, next) => {
  const { error } = BasketValidation(req.body);
  if (error) return next(new ErrorObject("Please provide a correct product id to add!", 400));

  let { product } = req.body;
  let user = await User.findById(req.user._id);

  // We will check stock count in details to add product to basket.
  const stockCountValidation = await Product.findById(product);
  if (stockCountValidation.stockAmount < 1)
    return next(new ErrorObject("The product doesn't have any stock to add.", 400));

  if (user.basket.length > 0) {
    let itemIndex = user.basket.findIndex((item) => String(item.product) === String(product));

    if (itemIndex === -1) user.basket.push({ product, quantity: 1 });
    else {
      if (user.basket[itemIndex].quantity >= stockCountValidation.stockAmount)
        return next(new ErrorObject("The product doesn't have any stock to add.", 400));
      user.basket[itemIndex].quantity++;
    }
  } else await user.basket.push({ product, quantity: 1 });

  await user.save();
  await User.populate(user, {
    path: "basket",
    populate: { path: "product" },
  });

  res.status(200).json(user.basket);
});

// Post /product/remove
export const RemoveProductToBasket = Async(async (req, res, next) => {
  let { product } = req.body;

  let user = await User.findById(req.user._id);

  if (user.basket.length > 0) {
    let itemIndex = user.basket.findIndex((item) => String(item.product) === String(product));
    if (itemIndex === -1) next(new ErrorObject("The basket doesn't have that item!", 400, 205));
    else {
      if (user.basket[itemIndex].quantity > 1) user.basket[itemIndex].quantity--;
      else user.basket.splice(itemIndex, 1);
    }
  } else return next(new ErrorObject("The basket is already empty!", 400, 204));

  await user.save();
  await User.populate(user, {
    path: "basket",
    populate: { path: "product" },
  });
  res.status(200).json(user.basket);
});

// Post /product/clear
export const ClearBasket = Async(async (req, res, next) => {
  let user = await User.findByIdAndUpdate(req.user._id, { basket: [] }, { new: true });

  res.status(200).json(user);
});
