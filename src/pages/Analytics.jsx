import React, { useContext } from "react";
import { GroceryContext } from "../context/GroceryContext";
import { FaBoxOpen, FaClock, FaTimesCircle, FaLeaf } from "react-icons/fa";
import "../styles/Analytics.css";

function Analytics() {
  const { items } = useContext(GroceryContext);

  const today = new Date();
  const fresh = items.filter(i => new Date(i.expiryDate) - today > 3);
  const soon = items.filter(i => {
    const diff = (new Date(i.expiryDate) - today) / (1000 * 60 * 60 * 24);
    return diff > 0 && diff <= 3;
  });
  const expired = items.filter(i => new Date(i.expiryDate) - today < 0);

  const total = items.length || 1;
  const percentage = (num) => ((num / total) * 100).toFixed(0);

  return (
    <div className="analytics-container">
      <h2 className="analytics-title">Pantry Analytics</h2>

      <div className="analytics-cards">

        {/* Fresh Items Card */}
        <div className="analytics-card fresh">
          <FaLeaf className="analytics-icon" />
          <h3>Fresh Items</h3>
          <p>{fresh.length}</p>

          <div className="progress-bar">
            <div className="fill" style={{ width: percentage(fresh.length) + "%" }}></div>
          </div>
        </div>

        {/* Expiring Soon Card */}
        <div className="analytics-card soon">
          <FaClock className="analytics-icon" />
          <h3>Expiring Soon</h3>
          <p>{soon.length}</p>

          <div className="progress-bar">
            <div className="fill" style={{ width: percentage(soon.length) + "%" }}></div>
          </div>
        </div>

        {/* Expired Items Card */}
        <div className="analytics-card expired">
          <FaTimesCircle className="analytics-icon" />
          <h3>Expired Items</h3>
          <p>{expired.length}</p>

          <div className="progress-bar">
            <div className="fill" style={{ width: percentage(expired.length) + "%" }}></div>
          </div>
        </div>

        {/* Total Items Card */}
        <div className="analytics-card total">
          <FaBoxOpen className="analytics-icon" />
          <h3>Total Items</h3>
          <p>{items.length}</p>

          <div className="progress-bar">
            <div className="fill" style={{ width: "100%" }}></div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Analytics;
