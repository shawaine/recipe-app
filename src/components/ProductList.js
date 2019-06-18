import React, { useContext } from "react";
import Item from "./Product";
import { ProductContext } from "./ProductContext";
import "../scss/ProductList.scss";

function ProductList() {
  const [products, setProduct] = useContext(ProductContext);
  return (
    <div className="product-list">
      {products.map(product => (
        <Item
          key={product.department_id}
          name={product.name}
          price={product.price}
          discounted_price={product.discounted_price}
        />
      ))}
    </div>
  );
}

export default ProductList;
