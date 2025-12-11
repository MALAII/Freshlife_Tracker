import { useState, useContext, useEffect } from "react";
import { GroceryContext } from "../context/GroceryContext";
import { useNavigate } from "react-router-dom";

function AddItemForm({ editItem }) {
  const { items, setItems } = useContext(GroceryContext);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [expiry, setExpiry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setQty(editItem.qty);
      setExpiry(editItem.expiryDate);
    }
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !qty || !expiry) return alert("Fill all fields");

    if (editItem) {
      const updated = items.map((i) =>
        i.id === editItem.id
          ? { ...i, name, qty, expiryDate: expiry }
          : i
      );
      setItems(updated);
    } else {
      const newItem = {
        id: Date.now(),
        name,
        qty,
        expiryDate: expiry,
        addedOn: new Date().toISOString(),
      };
      setItems([...items, newItem]);
    }

    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />
      <input
        type="date"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <button type="submit">{editItem ? "Update Item" : "Add Item"}</button>
    </form>
  );
}

export default AddItemForm;
