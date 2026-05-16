import express from "express";
import dotenv from "dotenv";
import path from "path";

import studentRoutes from "./routes/student.routes";
import connectDB from "./config/db"; 

dotenv.config();

const app = express();

connectDB();
app.use(express.urlencoded({ extended : true}));
app.use(express.json());

app.set("view engine" , "ejs");

app.set("views", path.join(__dirname, "../src/views"));

app.use("/", studentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => { 
   console.log(`Server running on port ${PORT}`);
});