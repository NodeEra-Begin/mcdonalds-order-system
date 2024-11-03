import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:2000", // Match this with your Express server URL
});

// Fetch menu items
export const getMenu = async () => {
  try {
    const response = await api.get("/menu");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch the menu. Please try again later.");
  }
};

// Place a new order
export const placeOrder = async (items: number[]) => {
  try {
    const response = await api.post("/order", { items });
    return response.data;
  } catch (error) {
    throw new Error("Failed to place the order. Please try again.");
  }
};

// Get order status
export const getOrderStatus = async (orderId: number) => {
  try {
    const response = await api.get(`/order/${orderId}`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch order status. Please try again.");
  }
};
