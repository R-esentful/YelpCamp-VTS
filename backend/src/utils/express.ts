import dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

export const PORT = process.env.EXPRESS_PORT ? parseInt(process.env.EXPRESS_PORT) : 3000;
export default app;
