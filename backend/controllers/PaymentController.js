import Async from "../middleware/Async.js";
import Stripe from "stripe";
import ErrorObject from "../utils/ErrorObject.js";
import User from "../models/User.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";

const stripe = new Stripe(process.env.STRIPE_KEY);

// Validate Payment
export const CreateNewPayment = Async(async (req, res, next) => {
  const paymentError = (error) => next(new ErrorObject(error, 400));

  try {
    const { paymentToken, address } = req.body;
    let user = await User.findById(req.user._id).populate({
      path: "basket",
      populate: { path: "product" },
    });

    const amount = user.basket.reduce(
      (previous, current) => previous + current.product.price * current.quantity,
      0
    );

    const newPayment = await stripe.paymentIntents.create({
      amount: amount * 100,
      currency: "usd",
      payment_method: paymentToken,
      confirm: true,
    });

    if (newPayment.status === "succeeded") {
      // Order Part
      const newOrder = await Order.create({
        buyer: user._id,
        products: user.basket.map((item) => ({
          quantity: item.quantity,
          product: item.product._id,
        })),
        totalAmount: amount,
        address: { ...address },
      });

      await user.basket.forEach(async (item) => {
        // Product Part
        let product = await Product.findById(item.product._id);
        product.totalSellAmount = product.totalSellAmount + 1;
        product.stockCount = product.stockCount - item.quantity;
        await product.save();

        // User Part
        const index = await user.purchasedProducts.findIndex((item) => item === product._id);
        if (index === -1)
          await User.updateOne(
            { _id: user._id },
            {
              $push: { purchasedProducts: product._id },
            },
            { new: true }
          );
      });

      user = await User.findByIdAndUpdate(user._id, { basket: [] }, { new: true });

      await Order.populate(newOrder, {
        path: "products",
        populate: { path: "product" },
      });

      res.status(200).json({ success: true, newOrder, user });
    } else return paymentError("Payment is not accepted.");
  } catch (error) {
    return paymentError(error);
  }
});
