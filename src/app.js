import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(
  cors({
    origgin: process.env.CORS_ORIGIN, // Adjust the origin as needed
    credentials: true, // Allow credentials to be sent
  })
);
app.use(
  express.json({
    limit: "20kb",
    // Set a limit for the request body size
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from the "public" directory
app.use(express.json());
app.use(cookieParser()); // Parse cookies from the request

app.get("/", (req, res) => {
  res.send("Server is working!");
});

export default app;
