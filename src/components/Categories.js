import React from "react";
import "../scss/Categories.scss";

function Categories() {
  return (
    <div className="sidebar">
      <div className="categories">
        Categories
        <h1>Anuna</h1>
      </div>
      <div className="hide-icon">
        <img src={require("../icons/sidebar-black.png")} alt="hide" />
      </div>
    </div>
  );
}

export default Categories;
