import User from "../models/User.js";
import Async from "../middleware/Async.js";
import ErrorObject from "../utils/ErrorObject.js";

// Get /user/me
export const GetUser = Async(async (req, res, next) => {
  const user = await User.findById(req.user.id).select(["-password", "-logintoken"]);
  res.status(200).json(user);
});
