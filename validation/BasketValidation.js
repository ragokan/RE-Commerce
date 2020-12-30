import Joi from "joi";
import objectId from "joi-objectid";
Joi.objectId = objectId(Joi, "Please enter the id of product!");

const BasketValidation = (data) => {
  const schema = Joi.object({
    product: Joi.objectId(),
  });
  return schema.validate(data);
};

export default BasketValidation;
