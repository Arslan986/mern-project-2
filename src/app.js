import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
import { Limit } from "./constants.js";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credential: true,
  })
);

app.use(express.json({ limit: `${Limit}` }));

app.use(
  express.urlencoded({
    extended: true,
    limit: `${Limit}`,
  })
);

app.use(cookieParser());

app.use(express.static("public"));

// routes 

import userRouter from "./routes/user.routes.js"

// route declaration

app.use("/api/v1/user", userRouter)

export { app };
