import express, { Request, Response } from "express";
import { menuItems, orders } from "../data";

const router = express.Router();
let orderIdCounter = 1;

//Place anew order
router.post("/", (req: Request, res: Response) => {
  const { items } = req.body;

  //Calculate total price
  const total = items.reduce((sum: number, itemId: number) => {
    const menuItem = menuItems.find((item) => item.id === itemId);
    return menuItem ? sum + menuItem.price : sum;
  }, 0);

  const newOrder = { id: orderIdCounter++, items, total };
  orders.push(newOrder);

  res.json({ message: "Order placed successfully!", order: newOrder });
});

// Check order status
router.get("/:orderId", (req: Request, res: Response) => {
  const orderId = parseInt(req.params.orderId);
  const order = orders.find((order) => order.id === orderId);

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: "Order not found!" });
  }
});

export default router;
