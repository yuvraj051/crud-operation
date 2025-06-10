import express from "express";
import dotenv from "dotenv";
import db from "../backend/config/db.js";

const app = express();
app.use(express.json());
dotenv.config();

db();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on  ${PORT}`);
});
