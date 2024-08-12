import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static(path.resolve(__dirname, '../public')));

app.use(cookieParser());

export { app };
