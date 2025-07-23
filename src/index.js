import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
//     app.on("error", () => {
//       console.log("ERROR: MongoDB connection failed");
//     });
//   } catch (error) {
//     console.error("MongoDB connection error:", error);
//   }
// })();
