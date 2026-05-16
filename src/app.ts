import express from "express";
import dotenv from "dotenv";
import path from "path";

import studentRoutes from "./routes/student.routes";
import connectDB from "./config/db"; 
import { loggerMiddleware } from "./middlewares/logger.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

dotenv.config();

const app = express();

connectDB();
import methodOverride from "method-override";
app.use(loggerMiddleware);

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method"));
app.use(express.json());

app.set("view engine" , "ejs");

app.set("views", path.join(__dirname, "../src/views"));

app.use("/", studentRoutes);

const PORT = process.env.PORT || 3000;

app.use((req, res) => {

    res.status(404).send("Route Not Found");
});

app.use(errorMiddleware);

app.listen(PORT , () => { 
   console.log(`Server running on port ${PORT}`);
});