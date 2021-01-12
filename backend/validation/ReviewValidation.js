import Joi from "joi";

const ReviewValidation = (data) => {
  const schema = Joi.object({
    text: Joi.string().required().messages({
      "any.required": "Please enter details for your review!",
      "string.min": "Please enter details for your review!",
    }),
    rating: Joi.number().min(0).max(5).required().messages({
      "any.required": "Please enter a rating for your review!",
      "number.min": "Please enter a rating for your review!",
    }),
  });
  return schema.validate(data);
};

export default ReviewValidation;
