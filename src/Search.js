import React from "react";


export default function Search() {
  return (
    <div className="Search">
      <form className="search-form">
        <input type="text" placeholder="Search" className="input-bar" />
        <input type="submit" value="🔍" className="search-button" />
      </form>
      <button>Current Location</button>
    </div>
  );
}
