import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// app.use(
//     cors({
//         origin: process.env.CORS_ORIGIN,
//         credentials: true,
//     })
// );


app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    credentials: true // Allow credentials
  }));


app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

app.use(cookieParser());



export { app };