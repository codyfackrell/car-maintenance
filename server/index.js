import express from "express";
import authRoutes from "./routes/authRoutes.js";
import maintenanceRoutes from "./routes/maintenanceRoutes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/maintenance", maintenanceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
