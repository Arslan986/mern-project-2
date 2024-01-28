import { app } from "./app.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(`${process.env.PORT}` || 3000, () => {
      console.log(`My app is running on port ${process.env.PORT}`);
    });
    app.on("error", (error) => {
      console.log("Error ", error);
      throw error;
    });
  })
  .catch((error) => {
    console.log(`Error ${error}`);
  });
