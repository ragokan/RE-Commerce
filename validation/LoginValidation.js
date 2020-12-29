import Joi from "joi";

const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email().messages({
      "any.required": "Please enter a valid email!",
      "string.min": "Please enter a valid email name!",
    }),
    password: Joi.string().min(5).required().messages({
      "any.required": "Please enter your password!",
      "string.min": "Please enter  a password that longer than 5 characters",
    }),
  });
  return schema.validate(data);
};

export default loginValidation;
