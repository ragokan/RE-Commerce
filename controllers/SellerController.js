import Product from "../models/Product.js";
import User from "../models/User.js";
import Async from "../middleware/Async.js";
import ProductValidation from "../validation/ProductValidation.js";
import ErrorObject from "../utils/ErrorObject.js";

// Get /seller/products
export const GetProducts = Async(async (req, res, next) => {
  let products;
  if (req.user.type === "admin") {
    products = await Product.find().populate("seller", ["type", "email", "fullname"]);
  } else if (req.user.type === "seller") {
    products = await Product.find({ seller: req.user._id });
  }
  res.status(200).json(products);
});

// Get /seller/productsOf/id
export const GetSellersProducts = Async(async (req, res, next) => {
  let seller = await User.findById(req.params.id).select(["-password", "-basket", "-logintoken"]);

  if (!seller) return next(new ErrorObject("No seller found with this id!", 404, 203));

  let products = await Product.find({ seller: req.params.id });
  res.status(200).json({ products, seller });
});

// Post /seller/products
export const AddProduct = Async(async (req, res, next) => {
  const { error } = ProductValidation(req.body);
  if (error) return next(new ErrorObject(error.details[0].message, 400));

  let product = await Product.create({
    ...req.body,
    seller: req.user._id,
  });
  res.status(200).json(product);
});

// Patch /seller/products/:id
export const UpdateProduct = Async(async (req, res, next) => {
  const { error } = ProductValidation(req.body);
  if (error) return next(new ErrorObject(error.details[0].message, 400));

  let productValidate = await Product.findById(req.params.id);
  if (!productValidate)
    return next(new ErrorObject("The product you are looking for is not found!", 404, 201));

  if (String(productValidate.seller) !== String(req.user._id))
    return next(
      new ErrorObject("You can't update or delete products that doesn't belongs to you!", 401, 202)
    );

  let product = await Product.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
    },
    { new: true }
  );

  res.status(200).json(product);
});

// Delete /seller/products/:id
export const DeleteProduct = Async(async (req, res, next) => {
  let productValidate = await Product.findById(req.params.id);
  if (!productValidate)
    return next(new ErrorObject("The product you are looking for is not found!", 404, 201));

  if (String(productValidate.seller) !== String(req.user._id))
    return next(
      new ErrorObject("You can't update or delete products that doesn't belongs to you!", 401, 202)
    );

  await Product.findByIdAndRemove(req.params.id);

  res.status(200).json("Product is deleted successfully!");
});
