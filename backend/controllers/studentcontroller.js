import Student from "../model/studentmodel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password, phone, gender, address } = req.body;

    if (!name || !email || !password || !phone || !gender || !address) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const userExists = await Student.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Student.create({
      name,
      email,
      password: hashedPassword,
      phone,
      address,
    });

    const { password: _, ...userWithoutPassword } = newUser._doc;

    res.status(201).json({
      message: "User created successfully!",
      user: userWithoutPassword,
    });
  } catch (error) {
    res.status(400).json({ message: "internal server error.." });
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({ message: "somthing is missing.." });
    }

    let user = await Student.findOne({ email });
    if (!user) {
      return res.status(409).json({ message: "email or password wrong" });
    }

    const ispassword = await bcrypt.compare(password, user.password);
    if (!ispassword) {
      return res.status(409).json({ message: "email or password wrong" });
    }

    user = {
      _id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .json({
        message: `Welcome back ${user.email} `,
        success: true,
        user: user,
        token,
      });
  } catch (error) {
    res.status(400).json({ message: "internal server error.." });
    console.log(error);
  }
};
