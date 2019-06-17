import React from "react";
import "../scss/Register.scss";

function User(props) {
  var title = "Register",
    redir = "Already have an account?",
    to = "Login",
    button = "Register",
    isRegister = "";
  if (props.type === "login") {
    title = "Login";
    redir = "Doesn't have an account?";
    to = "Register";
    button = "Login";
    isRegister = "hidden";
  }
  return (
    <section>
      <div className="register">
        <div className="background" />
        <div className="field">
          <form action="">
            <img src={require("../icons/close-big-red.png")} alt="exit" />
            <h1>{title}</h1>
            <p>* All fields are required!</p>
            <input
              className={isRegister}
              type="text"
              name="name"
              id="name"
              placeholder="Name *"
            />
            <input type="text" name="email" id="email" placeholder="Email *" />
            <input
              type="text"
              name="password"
              id="password"
              placeholder="Password *"
            />
            <div className="subscribe">{button}</div>
            <p>
              {redir} <a href="">{to}</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default User;
