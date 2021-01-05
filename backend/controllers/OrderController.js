import Order from "../models/Order.js";
import Async from "../middleware/Async.js";
import ErrorObject from "../utils/ErrorObject.js";

// Get User's Orders
export const GetOrders = Async(async (req, res, next) => {
  const orders = await Order.find({ buyer: req.user._id });
  res.status(200).json(orders);
});
