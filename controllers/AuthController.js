import User from "../models/User.js";
import Async from "../middleware/Async.js";
import RegisterValidation from "../validation/RegisterValidation.js";
import ErrorObject from "../utils/ErrorObject.js";

export const Register = Async(async (req, res, next) => {
  const { error } = RegisterValidation(req.body);
  if (error) return next(new ErrorObject(error.details[0].message, 400));

  let { email, password, fullname } = req.body;
  const userCheck = await User.findOne({ email });

  if (userCheck) return next(new ErrorObject("User already exists!", 400));

  const user = new User({ email, password, fullname });
  await user.save();
  const token = user.getToken();
  res.status(201).json({ token, message: "User created successfully!" });
});
