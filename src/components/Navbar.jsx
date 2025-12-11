import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/Navbar.css"

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">🍴FoodHelper</Link>
        <Link to="/">Dashboard</Link>
        <Link to="/add">Add Item</Link>
        <Link to="/analytics">Analytics</Link>
      </div>
      <div className="nav-right">
        {user && <span>Hi, {user.username}</span>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}

export default Navbar;
