import jwt from "jsonwebtoken";
import BadToken from "../models/BadToken.js";
import User from "../models/User.js";
import asyncHandler from "./asyncHandler.js";

function noPermissionError(res) {
  res.status(401);
  throw new Error("You don't have permission to do this action!");
}

const loginRequired = asyncHandler(async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) noPermissionError(res);

  const checkToken = await BadToken.findOne({ token });
  if (checkToken) {
    res.status(401);
    throw new Error("User already logged out, to do this action, log in!");
  }

  const userId = await jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(userId).select("-password");
  next();
});

const adminRequired = async(async (req, res, next) => {
  if (req.user && req.user.type === "admin") next();
  else noPermissionError(res);
});

export { loginRequired, adminRequired };
