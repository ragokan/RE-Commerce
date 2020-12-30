import mongoose from "mongoose";

const ProductType = {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Product",
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

export { ProductType, BasketSchema };
