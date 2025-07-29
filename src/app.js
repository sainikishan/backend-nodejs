import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// ✅ Use correct 'origin' key
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "20kb",
  })
);

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// ✅ Routes
import userRoutes from "./routes/user.route.js";
app.use("/api/v1/users", userRoutes);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server is working!");
});

export default app;
