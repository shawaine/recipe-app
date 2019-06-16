import React from "react";
import "../scss/Header.scss";

function Header() {
  return (
    <header>
      <div className="upper-row">
        <div className="user">
          <h3>
            Hi! <span className="highlight">Register </span>or
            <span className="highlight"> Login </span>
          </h3>
        </div>
        <div className="bag">
          <h3>Your bag</h3>
          <img src={require("../icon/icons-bag.png")} alt="bag" />
        </div>
      </div>
      <div className="lower-row">
        <div className="branding">
          <h1>
            <span className="highlight">Shopmate</span>
          </h1>
        </div>
        <div className="burger">
          <img
            src={require("../icon/controls-burger-white.png")}
            alt="burger"
          />
        </div>
      </div>
      <div className="menu-row">
        <div className="menu">
          <ul>
            <li>
              {" "}
              <a href="">a</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">b</a>{" "}
            </li>
            <li>
              {" "}
              <a href="">c</a>{" "}
            </li>
          </ul>
        </div>
        <div className="search-field">
          <img
            className="search"
            src={require("../icon/icons-search-black.png")}
            alt="search"
          />
          <input type="text" maxLength="25" placeholder="search" />
          <img
            className="clear"
            src={require("../icon/icons-close-small-black.png")}
            alt="clear"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
