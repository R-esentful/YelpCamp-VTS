import dotenv from "dotenv";
dotenv.config();

export const ENV = process.env.ENV || "";
export const MONGO_URI = process.env.MONGODB_URI || "";
export const secretKey = process.env.EXPRESS_SKEY || "";
export const AWS_FOLDER = process.env.AWS_FOLDER || "";
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY || "";
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY || "";
