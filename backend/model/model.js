import mongoose, { Types } from "mongoose";

const userschema = new mongoose.Schema({
  name: {
    Type: String,
    required: true,
  },
  email: {
    Type: String,
    required: true,
    unique: true,
  },
  password: {
    Type: String,
    required: true,
  },
  gender: {
    Type: String,
    enum: ["male", "female"],
    required: true,
  },
});

export const User = mongoose.model("User    ", userschema);
