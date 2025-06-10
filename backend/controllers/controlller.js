import User from "../model/model.js";
import bcrypt from "bcrypt";

export const create = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;

    if (!name || !email || !password || !gender) {
      return res.status(400).json({ message: "Something is missing..." });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists..." });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashpassword,
      gender,
    });

    res
      .status(201)
      .json({ message: "User created successfully!", user: newUser });
  } catch (error) {
    res
      .status(500)
      .json({ error: error.message, message: "Internal server error..." });
    console.log(error);
  }
};

export const read = async (req, res) => {
  try {
    const data = await User.find();
    if (data.length == 0) {
      return res.status(409).json({ message: "No users exist..." });
    }
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ error, message: "internal server error..." });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(409).json({ message: "missing userId.." });
    }
    const user = req.body;
    const update = await User.findByIdAndUpdate(id, user, { new: true });
    if (!update) {
      return res.status(409).json({ message: "User not Found...." });
    }
    res.status(200).json({ update, message: "data updated..." });
  } catch (error) {
    res.status(400).json({ error, message: "internal server error..." });
  }
};

export const deleteuser = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error, message: "internal server error..." });
  }
};
