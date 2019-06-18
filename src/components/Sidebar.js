import React from "react";
import "../scss/Sidebar.scss";
import Categories from "./Categories";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="categories">
        CATEGORIES
        <Categories />
      </div>
      <div className="hide-icon">
        <img src={require("../icons/sidebar-black.png")} alt="hide" />
      </div>
    </div>
  );
}

export default Sidebar;
