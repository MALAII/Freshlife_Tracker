import React from "react";
import { FiSearch } from "react-icons/fi";
import "../styles/SearchBar.css";

function SearchBar({ placeholder, onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder || "Search..."}
        onChange={(e) => onSearch(e.target.value)}
      />

      <button className="search-btn">
        <FiSearch className="search-icon" />
      </button>
    </div>
  );
}

export default SearchBar;
