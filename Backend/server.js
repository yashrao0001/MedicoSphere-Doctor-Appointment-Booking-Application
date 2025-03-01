import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js ";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import doctorRouter from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

//app config
const app = express();
const port = process.env.PORT;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors());

//api endpoint
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
app.get("/", (req, res) => {
  res.send("API working");
});

//localhost:4000/api/admin
app.use("/api/admin", adminRouter);

//localhost:4000/api/doctor
app.use("/api/doctor", doctorRouter);

//localhost:4000/api/user
app.use("/api/user", userRouter);
