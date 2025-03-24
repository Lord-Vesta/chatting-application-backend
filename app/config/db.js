import dotenv from "dotenv";
dotenv.config();

export const mongoDbUrl = `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASSWORD}@cluster0.ubvijro.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
