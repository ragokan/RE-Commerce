import mongoose from "mongoose";

const ProductType = {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Product",
  required: true,
};

const UserType = {
  type: mongoose.Schema.Types.ObjectId,
  ref: "User",
  required: true,
};

const BasketSchema = new mongoose.Schema({
  product: ProductType,
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const ProductReview = new mongoose.Schema(
  {
    user: UserType,
    rating: { type: Number, required: true },
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export { ProductType, BasketSchema, UserType, ProductReview };
