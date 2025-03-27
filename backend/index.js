import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import mongoSanitize from "express-mongo-sanitize";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import authRouter from "./routes/auth.js";
import ideaRouter from "./routes/idea.js";
import techsectionRouter from "./routes/techsection.js";
import gurulinkRouter from "./routes/gurulink.js";
import errorHandler from "./handlers/error.js";

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ORIGIN = "http://localhost:4173";
const app = express();

// // TODP: figure out why the following does not work
// app.use(
//   cors({
//     origin: ["http://localhost:4173"], // Allow frontend origin
//     methods: "GET,POST,PUT,DELETE,OPTIONS", // Allowed methods
//     allowedHeaders: "Content-Type, Authorization", // Allow custom headers
//     credentials: true, // If using cookies/authentication
//   })
// );
// app.use(cors({ origin: "http://localhost:4173" })); // allow origin from front end

const corsOptions = {
  origin: (origin, callback) => {
    console.log("Checking CORS for Origin:", origin);
    if (origin === ORIGIN) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type, Authorization",
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend/public")));
app.use(mongoSanitize());
app.use(helmet());

mongoose
  .connect("mongodb://localhost:27017/haiyandb")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.get("/", (req, res) => {
  res.send("<h1>Hi Haiyan</h1>");
});

app.use("/api/auth", authRouter);
app.use("/api/ideas", ideaRouter);
app.use("/api/ts", techsectionRouter);
app.use("/api/gl", gurulinkRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
