import express from "express";
import { login, register } from "../controllers/studentcontroller.js";
import { protect } from "../middelware/auth.js";

const route = express.Router();

route.post("/register", register);
route.post("/login", login);

route.get("/profile", protect, (req, res) => {
  res.json({ message: "This is a protected route", userId: req.user });
});

export default route;
