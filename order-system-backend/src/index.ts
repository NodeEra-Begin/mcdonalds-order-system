import express, { Request, Response } from "express";
import menuRoutes from "./routes/menu";
import orderRoutes from "./routes/order";

const app = express();
const cors = require("cors");
const PORT = 2000;

app.use(express.json());
// Use CORS middleware
app.use(
  cors({
    origin: "*", // Allow only your React frontend
  })
);

//Besic routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the fucking McDonald's Ordering System!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use("/menu", menuRoutes);
app.use("/order", orderRoutes);
