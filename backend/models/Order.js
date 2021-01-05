import mongoose from "mongoose";
import { ProductType, UserType } from "./Utilities.js";

const Order = new mongoose.Schema(
  {
    buyer: UserType,
    products: [ProductType],
    date: {
      type: Date,
      default: new Date(),
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    address: {
      city: { type: String, required: true },
      country: { type: String, required: true },
      description: { type: String, required: true },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", Order);
