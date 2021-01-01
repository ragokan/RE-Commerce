import mongoose from "mongoose";
import { UserType, ProductReview } from "./Utilities.js";

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    stockCount: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [ProductReview],
    seller: UserType,
    favorites: [UserType],
    totalSellAmount: [UserType],
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
