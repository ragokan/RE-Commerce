import Order from "../models/Order.js";
import Async from "../middleware/Async.js";

// Get User's Orders
export const GetOrders = Async(async (req, res, next) => {
  const orders = await Order.find({ buyer: req.user._id }).populate({
    path: "products",
    populate: { path: "product" },
  });
  res.status(200).json(orders);
});

// Get All Orders
export const GetAllOrders = Async(async (req, res, next) => {
  const orders = await Order.find().populate("buyer", ["email", "fullname"]);

  await Order.populate(orders, {
    path: "products",
    populate: { path: "product" },
  });
  res.status(200).json(orders);
});
