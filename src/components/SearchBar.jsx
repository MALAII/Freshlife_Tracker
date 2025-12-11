import React from "react";

import "../styles/SearchBar"

function SearchBar({ placeholder, onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder || "Search..."}
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search-btn">Search</button>
    </div>
  );
}

export default SearchBar;
