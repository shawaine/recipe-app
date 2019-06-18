import React, { useState, useEffect, useContext, createContext } from "react";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch("https://backendapi.turing.com/products");
      const data = await response.json();
      setProduct(data.rows);
    };
    getItems();
  }, []);

  return (
    <ProductContext.Provider value={[products, setProduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};
