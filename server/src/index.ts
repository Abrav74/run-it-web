import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db";
import usersRouter from "./routes/users";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI || "";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ ok: true, service: "run-it-server" }));
app.use("/api/users", usersRouter);

async function start() {
  try {
    if (!MONGODB_URI) {
      console.warn("MONGODB_URI is not set. Set it in .env to connect to MongoDB.");
    } else {
      await connectDB(MONGODB_URI);
    }

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

start();
