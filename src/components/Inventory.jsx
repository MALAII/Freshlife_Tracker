import React from "react";
import '../styles/Inventory.css';

function Inventory({ products }) {
  return (
    <div style={styles.container}>
      <h2>📦 Inventory</h2>

      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>

          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>₹{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    background: "#fff"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  }
};

export default Inventory;
