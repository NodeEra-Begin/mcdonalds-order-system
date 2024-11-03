import express, { Request, Response } from "express";
import { menuItems } from "../data";

const router = express.Router();

// Get the menu
router.get("/", (req: Request, res: Response) => {
  res.json(menuItems);
});

export default router;
