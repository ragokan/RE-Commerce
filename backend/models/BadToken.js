import mongoose from "mongoose";

const BadToken = new mongoose.Schema({
  token: {},
});

export default mongoose.model("BadToken", BadToken);
