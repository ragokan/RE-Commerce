import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const User = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  logintoken: {
    required: false,
    type: String,
    default: "null",
  },
  type: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  basket: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
        default: 1,
      },
    },
  ],
});

// Password Hash
User.pre("save", async function (next) {
  if (this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

// Password Compare
User.methods.checkPass = async function (pass) {
  const passcheck = await bcrypt.compare(pass, this.password);
  if (!passcheck) return false;
  else return true;
};

// Login
User.methods.getToken = function () {
  if (this.logintoken != "null") {
    return this.logintoken;
  } else {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
    this.logintoken = token;
    this.save();
    return token;
  }
};

// Logout
import BadToken from "./BadToken.js";

User.methods.logout = async function () {
  const token = this.logintoken;
  if (token == "null") return;
  else {
    await BadToken.create({ token });
    this.logintoken = "null";
    await this.save();
  }
};

export default mongoose.model("User", User);
