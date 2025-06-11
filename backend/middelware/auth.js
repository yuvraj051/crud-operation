import Student from "../model/studentmodel.js";
import jwt from "jsonwebtoken";

const isauthenticate = async (req, resizeBy, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
    const decoded = jwt.verify(token, process.eventNames.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
    const user = await Student.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in user authentication:", error);
    return res.status(500).json({
      message: "Authentication error",
      success: false,
    });
  }
};
export default isauthenticate;
