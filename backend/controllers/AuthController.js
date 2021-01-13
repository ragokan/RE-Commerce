import User from "../models/User.js";
import Async from "../middleware/Async.js";
import RegisterValidation from "../validation/RegisterValidation.js";
import LoginValidation from "../validation/LoginValidation.js";
import ErrorObject from "../utils/ErrorObject.js";

// Post /auth/register
export const Register = Async(async (req, res, next) => {
  const { error } = RegisterValidation(req.body);
  if (error) return next(new ErrorObject(error.details[0].message, 400));

  let { email, password, fullname } = req.body;
  const userCheck = await User.findOne({ email });

  if (userCheck) return next(new ErrorObject("User already exists!", 400, 104));

  const user = new User({ email, password, fullname });
  await user.save();
  const token = user.getToken();
  req.headers["Authorization"] = token;
  res.status(201).json({ token });
});

// Post /auth/login
export const Login = Async(async (req, res, next) => {
  const { error } = LoginValidation(req.body);
  if (error) return next(new ErrorObject(error.details[0].message, 400));

  let { email, password } = req.body;

  const userCheck = await User.findOne({ email });
  if (!userCheck) return next(new ErrorObject("Invalid Credentials!", 400, 101));

  const passCheck = await userCheck.checkPass(password);
  if (!passCheck) return next(new ErrorObject("Invalid Credentials!", 400, 101));

  const token = userCheck.getToken();
  req.headers["Authorization"] = token;
  res.status(200).json({ token });
});

// Post /auth/logout
export const Logout = Async(async (req, res, next) => {
  const userID = req.user.id;
  const user = await User.findById(userID);
  user.logout();
  return res.status(200).json("Logged Out Succesfuly!");
});
