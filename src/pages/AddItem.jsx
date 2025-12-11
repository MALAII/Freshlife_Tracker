import React, { useState, useContext } from "react";
import { GroceryContext } from "../context/GroceryContext";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/AddItem.css";

function AddItem() {
  const { addItem, updateItem } = useContext(GroceryContext);
  const location = useLocation();
  const navigate = useNavigate();

  const editItem = location.state?.editItem || null;

  const [name, setName] = useState(editItem?.name || "");
  const [quantity, setQuantity] = useState(editItem?.quantity || "");
  const [expiryDate, setExpiryDate] = useState(editItem?.expiryDate || "");
  const [category, setCategory] = useState(editItem?.category || "Grocery");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: editItem ? editItem.id : Date.now(),
      name,
      quantity,
      expiryDate,
      category,
    };

    if (editItem) updateItem(newItem);
    else addItem(newItem);

    navigate("/");
  };

  return (
    <div className="add-container">
      <h2>{editItem ? "Edit Item" : "Add New Item"}</h2>

      <form className="add-form" onSubmit={handleSubmit}>
        <label>Item Name</label>
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Milk"
        />

        <label>Quantity</label>
        <input 
          type="text" 
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="e.g. 2 Packets"
        />

        <label>Expiry Date</label>
        <input 
          type="date" 
          value={expiryDate}
          onChange={(e) => setExpiryDate(e.target.value)}
        />

        <label>Category</label>
        <select 
          className="category-select"   // ✅ Added this line
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Grocery</option>
          <option>Dairy</option>
          <option>Snacks</option>
          <option>Beverages</option>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Frozen</option>
        </select>

        <button type="submit" className="btn-add">
          {editItem ? "Update Item" : "Add Item"}
        </button>
      </form>
    </div>
  );
}

export default AddItem;
