import { useState } from "react";
import { placeOrder } from "../services/api";

export const usePlaceOrder = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderConfirmation, setOrderConfirmation] = useState(null);

  const placeNewOrder = async (items: number[]) => {
    setLoading(true);
    setError(null);
    try {
      const data = await placeOrder(items);
      setOrderConfirmation(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { placeNewOrder, loading, error, orderConfirmation };
};
