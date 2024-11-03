import React, { useState } from "react";
import { useOrderStatus } from "../hooks/useOrderStatus";

const OrderStatus: React.FC = () => {
  const [orderId, setOrderId] = useState("");
  const { fetchOrderStatus, loading, error, orderStatus } = useOrderStatus();

  const handleCheckStatus = () => {
    if (orderId) fetchOrderStatus(parseInt(orderId));
  };

  return (
    <div>
      <h1>Check Order Status</h1>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={handleCheckStatus} disabled={loading}>
        {loading ? "Checking..." : "Check Status"}
      </button>
      {error && <p>{error}</p>}
      {orderStatus && (
        <div>
          <h2>Order ID: {orderStatus.id}</h2>
          <p>Total: ${orderStatus.total.toFixed(2)}</p>
          <p>Items: {orderStatus.items.join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default OrderStatus;
