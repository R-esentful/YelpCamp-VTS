import dotenv from "dotenv";
dotenv.config();

export const MONGO_URI = process.env.MONGODB_URI as string;
