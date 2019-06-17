import React from "react";
import "./App.css";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
