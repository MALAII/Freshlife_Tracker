import React, { useContext } from "react";
import { GroceryContext } from "../context/GroceryContext";
import { useNavigate } from "react-router-dom";
import RecipeSuggestion from "./RecipeSuggestion";
import "../styles/ItemCard.css";

function ItemCard({ item }) {
  const { deleteItem } = useContext(GroceryContext);
  const navigate = useNavigate();

  const getStatus = (expiryDate) => {
    const today = new Date();
    const exp = new Date(expiryDate);
    const diff = (exp - today) / (1000 * 60 * 60 * 24);
    if (diff < 0) return "expired";
    if (diff <= 3) return "soon";
    return "fresh";
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete "${item.name}"?`)) {
      deleteItem(item.id);
    }
  };

  const handleEdit = () => {
    navigate("/add", { state: { editItem: item } });
  };

  return (
    <div className={`item-card ${getStatus(item.expiryDate)}`}>
      <div className="item-header">
        <h3>{item.name}</h3>
        <span className={`badge ${getStatus(item.expiryDate)}`}>
          {getStatus(item.expiryDate)}
        </span>
      </div>

      <div className="item-details">
<p>Quantity: {item.quantity}</p>
<p>Category: {item.category}</p>
<p>Expiry: {item.expiryDate}</p>

      </div>

      <div className="card-buttons">
        <button className="card-btn edit" onClick={handleEdit}>Edit</button>
        <button className="card-btn delete" onClick={handleDelete}>Delete</button>
      </div>

      {getStatus(item.expiryDate) === "soon" && <RecipeSuggestion item={item} />}
    </div>
  );
}

export default ItemCard;
