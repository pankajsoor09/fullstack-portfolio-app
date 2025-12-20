import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log("Environment:", process.env.NODE_ENV);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend API running 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});