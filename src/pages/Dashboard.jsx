import React, { useContext, useState } from "react";
import { GroceryContext } from "../context/GroceryContext";
import ItemCard from "../components/ItemCard";
import "../styles/Dashboard.css";

function Dashboard() {
  const { items } = useContext(GroceryContext);

  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const filteredItems = items.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      filterCategory === "All" || item.category === filterCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="dashboard">
      <h2 className="dash-title">Your Items</h2>

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

      <div className="item-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))
        ) : (
          <p className="no-items">No items found</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
