import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div>
    <h1>McDonald's Ordering System</h1>
    <Link to="/menu">View Menu</Link> |{" "}
    <Link to="/order-status">Check Order Status</Link>
  </div>
);

export default Home;
