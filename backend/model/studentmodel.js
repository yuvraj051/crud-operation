import mongoose from "mongoose";

const studentschema = new mongoose.Schema({
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
  phone: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  address: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentschema);

export default Student;
