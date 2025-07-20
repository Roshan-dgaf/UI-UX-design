import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import "./MyOrders.css";


const MyOrders = () => {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    if (response.data.success) {
      setData(response.data.data);
    }
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders">
      <h2 className="orders-heading">My Orders</h2>
      <div className="orders-container">
        {data.map((order, index) => (
          <div key={index} className="order-card">
            <img src={assets.service_icon} alt="service" className="order-icon" />


            <div className="order-details">
              <p className="order-items">
                {order.items.map((item, i) =>
                  `${item.name} x ${item.quantity}${i !== order.items.length - 1 ? ', ' : ''}`
                )}
              </p>
              <div className="order-meta">
                <span className="order-price">${order.amount}.00</span>
                <span className="order-count">Items: {order.items.length}</span>
                <span className={`order-status ${order.status.toLowerCase()}`}>
                  <span className="status-dot">&#x25cf;</span> {order.status}
                </span>
              </div>
            </div>
            <button className="track-btn" onClick={fetchOrders}>
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
