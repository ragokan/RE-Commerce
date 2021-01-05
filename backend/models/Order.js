import mongoose from "mongoose";
import { BasketSchema, UserType } from "./Utilities.js";

const Order = new mongoose.Schema(
  {
    buyer: UserType,
    products: [BasketSchema],
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
    delivered: {
      type: Boolean,
      default: false,
      required: false,
    },
    cargoLocation: {
      type: String,
      default: "Not Moved Yet",
      required: false,
    },
  },
  { timestamps: true }
);

// mongoose
//   .model("Order", Order)
//   .collection.updateMany({ delivered: null }, { $set: { delivered: false } });
// mongoose
//   .model("Order", Order)
//   .collection.updateMany({ cargoLocation: null }, { $set: { cargoLocation: "Not Moved Yet" } });

export default mongoose.model("Order", Order);
