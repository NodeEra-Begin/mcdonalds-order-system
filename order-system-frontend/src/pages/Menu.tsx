import React, { useState } from "react";
import { useMenu } from "../hooks/useMenu";
import { usePlaceOrder } from "../hooks/usePlaceOrder";

const Menu: React.FC = () => {
  const { menu, loading, error } = useMenu();
  const { placeNewOrder, loading: orderLoading, error: orderError, orderConfirmation } = usePlaceOrder();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleSelect = (itemId: number) => {
    setSelectedItems((prev) => [...prev, itemId]);
  };

  const handleOrder = () => {
    placeNewOrder(selectedItems);
    setSelectedItems([]); // Clear selection after placing order
  };

  return (
    <div>
      <h1>Menu</h1>
      {loading && <p>Loading menu...</p>}
      {error && <p>{error}</p>}
      <ul>
        {menu.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => handleSelect(item.id)}>Add to Order</button>
          </li>
        ))}
      </ul>
      <button onClick={handleOrder} disabled={orderLoading}>
        {orderLoading ? "Placing Order..." : "Place Order"}
      </button>
      {orderError && <p>{orderError}</p>}
      {orderConfirmation && <p>Order placed! Your order ID is: {orderConfirmation.order.id}</p>}
    </div>
  );
};

export default Menu;
