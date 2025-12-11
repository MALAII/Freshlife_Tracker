import { createContext, useState, useEffect } from "react";

export const GroceryContext = createContext();

export function GroceryProvider({ children }) {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // ✅ Add Item Function
  const addItem = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  // Optional (for future)
  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateItem = (updatedItem) => {
    setItems((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  return (
    <GroceryContext.Provider
      value={{
        items,
        addItem,     // ✅ Now exported
        deleteItem,  // optional
        updateItem,  // optional
      }}
    >
      {children}
    </GroceryContext.Provider>
  );
}
