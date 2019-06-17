import React from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <User type={"login"} />
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
