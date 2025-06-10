import express from "express";
import dotenv from "dotenv";
import db from "../backend/config/db.js"; // Make sure this path is correct
import route from "./routes/route.js";
import cors from "cors";

dotenv.config(); // Should come before using environment variables

const app = express();

app.use(cors());

app.use(express.json()); // Middleware to parse JSON bodies

db(); // Connect to MongoDB

const PORT = process.env.PORT || 4000;

app.use("/user/api", route);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
