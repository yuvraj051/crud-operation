import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
});

const User = mongoose.model("User", userSchema); // Clean name, no extra spaces

export default User; // Export the model, not the schema
