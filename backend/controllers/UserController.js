import Async from "../middleware/Async.js";

// Get /user/me
export const GetUser = Async(async (req, res, next) => {
  res.status(200).json(req.user);
});
