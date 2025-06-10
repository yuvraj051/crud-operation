import express from "express";
import {
  create,
  deleteall,
  deleteuser,
  read,
  update,
} from "../controllers/controlller.js";

const route = express.Router();

route.get("/read", read); // Read data: use GET
route.post("/create", create); // Create data: use POST
route.put("/update/:id", update); // Update data by ID
route.delete("/delete/:id", deleteuser); // Delete data by ID
route.delete("/deleteall", deleteall);

export default route;
