import React from "react";
import "../scss/Register.scss";

function Register() {
  return (
    <section>
      <div className="register">
        <div className="background" />
        <div className="field">
          <div className="controls">
            <img src={require("../icons/close-big-red.png")} alt="exit" />
            <h1>Register</h1>
            <p>* All fields are required!</p>
            <input type="text" name="name" id="name" placeholder="Name *" />
            <input type="text" name="email" id="email" placeholder="Email *" />
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password *"
            />
            <div className="subscribe">Subscribe</div>
            <p>
              Already have an account? <a href="">Login</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
