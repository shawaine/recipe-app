import React, { useState } from "react";
import "../scss/Header.scss";
import Departments from "./Departments";

function Header() {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  return (
    <header>
      <div className="upper-row">
        <div className="user">
          <h3>
            Hi!
            <span className="highlight register">Register</span>
            or
            <span className="highlight login">Login</span>
          </h3>
        </div>
        <div className="bag">
          <h3>Your bag</h3>
          <img src={require("../icons/icons-bag.png")} alt="bag" />
        </div>
      </div>
      <div className="lower-row">
        <div className="branding">
          <h1>
            <span className="highlight">Shopmate</span>
          </h1>
        </div>
        <div className="burger" onClick={showMenu}>
          <img
            src={require("../icons/controls-burger-white.png")}
            alt="burger"
          />
        </div>
      </div>
      <div className={"menu-row " + (menu ? "show-menu" : "")}>
        <Departments />
        <div className="search-field">
          <img
            className="search"
            src={require("../icons/icons-search-black.png")}
            alt="search"
          />
          <input type="text" maxLength="25" placeholder="search" />
          <img
            className="clear"
            src={require("../icons/icons-close-small-black.png")}
            alt="clear"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
