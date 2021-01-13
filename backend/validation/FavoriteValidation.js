import Joi from "joi";
import objectId from "joi-objectid";
Joi.objectId = objectId(Joi, "Please enter the id of product!");

const FavoriteValidation = (data) => {
  const schema = Joi.object({
    product: Joi.objectId(),
  });
  return schema.validate(data);
};

export default FavoriteValidation;
