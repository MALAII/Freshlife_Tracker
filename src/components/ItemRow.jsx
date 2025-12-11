import React, { useContext } from "react";
import { GroceryContext } from "../context/GroceryContext";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";

function ItemRow({ item }) {
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

  return (
    <tr className={`row-${getStatus(item.expiryDate)}`}>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.category}</td>
      <td>{item.expiryDate}</td>

      <td>
        <span className={`status-badge ${getStatus(item.expiryDate)}`}>
          {getStatus(item.expiryDate)}
        </span>
      </td>

      <td className="action-icons">
        <FaEdit
          className="icon edit-icon"
          onClick={() => navigate("/add", { state: { editItem: item } })}
        />
        <FaTrash
          className="icon delete-icon"
          onClick={() => deleteItem(item.id)}
        />
      </td>
    </tr>
  );
}

export default ItemRow;
