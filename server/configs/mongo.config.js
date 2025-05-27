// configs/mongo.config.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); 
    console.log("CONNECTED TO DB");
  } catch (error) {
    console.log("Error connecting to DB:", error.message);
  }
};
