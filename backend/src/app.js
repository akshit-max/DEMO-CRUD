import express from "express";
import cors from "cors";
import morgan from "morgan";
import noteRoutes from "./routes/noteRoutes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Backend running successfully"); 
});

app.use("/api/notes", noteRoutes);



export default app;
