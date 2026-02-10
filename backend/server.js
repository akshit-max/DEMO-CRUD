import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
dotenv.config();
import app from "./src/app.js";
connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
