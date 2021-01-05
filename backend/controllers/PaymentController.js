import Async from "../middleware/Async.js";
import Stripe from "stripe";
import ErrorObject from "../utils/ErrorObject.js";
import User from "../models/User.js";
const stripe = new Stripe(process.env.STRIPE_KEY);

// Validate Payment
export const CreateNewPayment = Async(async (req, res, next) => {
  const paymentError = (error) =>
    next(
      new ErrorObject("An error happened while trying to pay your products, details: " + error, 400)
    );

  try {
    const { paymentToken } = req.body;
    const user = await User.findById(req.user._id).populate({
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
      // do the card things here
    } else return paymentError("Payment is not accepted.");

    res.status(200).json("Success");
  } catch (error) {
    return paymentError(error);
  }
});
