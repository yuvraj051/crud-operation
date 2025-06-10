import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Optional: exit the app if connection fails
  }
};

export default db;
