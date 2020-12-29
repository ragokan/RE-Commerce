import jwt from "jsonwebtoken";
import BadToken from "../models/BadToken.js";
import User from "../models/User.js";
import Async from "./Async.js";
import ErrorObject from "../utils/ErrorObject.js";

const noPermissionError = (next) => next(new ErrorObject("You don't have permission to do this action!", 401, 102));

const LoginRequired = Async(async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return noPermissionError(next);

  const checkToken = await BadToken.findOne({ token });
  if (checkToken) return next(new ErrorObject("User already logged out, to do this action log in!", 401, 103));

  const userId = await jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(userId.id).select("-password");
  next();
});

const AdminRequired = Async(async (req, res, next) => {
  if (req.user && req.user.type === "admin") next();
  else return noPermissionError(next);
});

export { LoginRequired, AdminRequired };
