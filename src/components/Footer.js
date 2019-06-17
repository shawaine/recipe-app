import React from "react";
import "../scss/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="newsletter">
        <div className="updates">
          <p>Subscribe for shop news, updates, and special offer</p>
        </div>
        <div className="email-area">
          <div className="email-field">
            <img
              className="email"
              src={require("../icons/icons-email-black.png")}
              alt="email"
            />
            <input type="text" maxLength="30" placeholder="your email here" />
            <img
              className="clear"
              src={require("../icons/icons-close-small-black.png")}
              alt="clear"
            />
          </div>
          <div className="subscribe">Subscribe</div>
        </div>
      </div>
      <div className="categories">
        <ul>
          <li>
            <a href="">a</a>
          </li>
          <li>
            <a href="">b</a>
          </li>
          <li>
            <a href="">c</a>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <img
          src={require("../icons/icons-instagram-black.png")}
          alt="instagram"
        />
        <img
          src={require("../icons/icons-pinterest-black.png")}
          alt="pinterest"
        />
        <img src={require("../icons/icons-twitter-black.png")} alt="twitter" />
        <img
          src={require("../icons/icons-facebook-black.png")}
          alt="facebook"
        />
      </div>
      <div className="foot">
        <p>&copy;2019 shopmate Ltd | contact | privacy policy</p>
      </div>
    </footer>
  );
}

export default Footer;
