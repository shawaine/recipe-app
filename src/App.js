import React from "react";
import "./App.css";
import Header from "./components/Header";
import Register from "./components/Register";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Register />
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
