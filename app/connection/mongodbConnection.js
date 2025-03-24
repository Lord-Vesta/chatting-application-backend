import mongoose from "mongoose";
import { mongoDbUrl } from "../config/db.js";

const connectToMongoDb = async () => {
  try {
    const conn = await mongoose.connect(mongoDbUrl);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    process.exit(1);
  }
};

export default connectToMongoDb;
