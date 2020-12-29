import User from "../models/User.js";
import Async from "../middleware/Async.js";
import RegisterValidation from "../validation/RegisterValidation.js";

export const Register = Async(async (req, res) => {
  const { error } = RegisterValidation(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.details[0].message);
  }

  let { email, password, fullname } = req.body;
  const userCheck = await User.findOne({ email });

  if (userCheck) {
    res.status(400);
    throw new Error("User already exists!");
  }

  const user = new User({ email, password, fullname });
  await user.save();
  const token = user.getToken();
  res.status(201).json({ token, message: "User created successfully!" });
});
