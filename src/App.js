import React from "react";
import "./App.css";
import Header from "./components/Header";
import User from "./components/User";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import { ProductProvider } from "./components/ProductContext";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      {/* <User type={"login"} /> */}
      <Header />
      <ProductProvider>
        <ProductList />
      </ProductProvider>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
