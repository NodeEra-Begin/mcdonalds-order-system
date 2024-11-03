import { useState } from "react";
import { getOrderStatus } from "../services/api";

export const useOrderStatus = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderStatus, setOrderStatus] = useState(null);

  const fetchOrderStatus = async (orderId: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getOrderStatus(orderId);
      setOrderStatus(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { fetchOrderStatus, loading, error, orderStatus };
};
