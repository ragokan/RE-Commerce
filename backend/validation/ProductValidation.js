import Joi from "joi";

const ProductValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(2).required().messages({
      "any.required": "Please enter a valid name!",
      "string.min": "Please enter a valid name!",
    }),
    category: Joi.string().min(2).required().messages({
      "any.required": "Please enter a valid category!",
      "string.min": "Please enter  a valid category!",
    }),
    description: Joi.string().min(2).required().messages({
      "any.required": "Please enter a valid description!",
      "string.min": "Please enter  a valid description!",
    }),
    brand: Joi.string().min(2).required().messages({
      "any.required": "Please enter a valid brand!",
      "string.min": "Please enter  a valid brand!",
    }),
    image: Joi.string().min(2).required().messages({
      "any.required": "Please enter a valid image!",
      "string.min": "Please enter  a valid image!",
    }),
    price: Joi.number().min(0).required().messages({
      "any.required": "Please enter the price of product!",
      "number.min": "Please enter a price that higher than 0!",
    }),
    stockCount: Joi.number().min(-1).required().messages({
      "any.required": "Please enter the stock of product!",
      "number.min": "Please enter a stock that higher or equal to 0!",
    }),
  });
  return schema.validate(data);
};

export default ProductValidation;
