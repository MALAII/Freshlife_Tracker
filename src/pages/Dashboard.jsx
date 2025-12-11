import React, { useContext, useState } from "react";
import { GroceryContext } from "../context/GroceryContext";
import ItemRow from "../components/ItemRow";
import "../styles/Dashboard.css";
import "../styles/ItemTable.css";

function Dashboard() {
  const { items } = useContext(GroceryContext);

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      filterCategory === "All" || item.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="dashboard">
      {/* <h2 className="dash-title">Your Items</h2> */}

      <div className="filters">
        <input
          className="search-input"
          placeholder="Search items..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="category-filter"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option>All</option>
          <option>Grocery</option>
          <option>Dairy</option>
          <option>Snacks</option>
          <option>Beverages</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Frozen</option>
        </select>
      </div>

      <div className="table-container">
        <table className="item-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Category</th>
              <th>Expiry</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <ItemRow key={item.id} item={item} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="no-items">No items found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
