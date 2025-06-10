import User from "../model/model.js";

export const create = async (req, res) => {
  try {
    const { name, email, password, gender } = req.body;
    if (!name || !email || !password || !gender) {
      return res.status(401).json();
    }
    const user = await User.findOne({ email });
  } catch (error) {
    res.status(400).json({ error, message: "internal server error..." });
  }
};
export const read = async (req, res) => {
  try {
  } catch (error) {
    res.status(400).json({ error, message: "internal server error..." });
  }
};
export const update = async (req, res) => {
  try {
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
