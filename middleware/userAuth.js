import jwt from "jsonwebtoken";
import BadToken from "../models/BadToken.js";

const auth = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).send("You have to login to see this page!");

  const checkToken = await BadToken.findOne({ token });
  if (checkToken) return res.status(401).send("User already log out, so you can't do it!");

  try {
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifiedUser;
    next();
  } catch (err) {
    res.status(400).send("Your account is not eligible too see this content!");
  }
};

export default auth;
