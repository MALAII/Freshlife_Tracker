import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiPlusCircle, FiBarChart2, FiLogOut } from "react-icons/fi";
import "../styles/Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div className="sidebar">
      <h2 className="side-title">FreshLife</h2>

      <nav className="side-nav">
        <NavLink to="/" className="side-link">
          <FiHome className="icon" />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/add" className="side-link">
          <FiPlusCircle className="icon" />
          <span>Add Item</span>
        </NavLink>

        <NavLink to="/dashboard" className="side-link">
          <FiBarChart2 className="icon" />
          <span>Analytics</span>
        </NavLink>
      </nav>

      {/* Logout at bottom */}
      <button className="logout-btn" onClick={handleLogout}>
        <FiLogOut className="icon" />
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Sidebar;
