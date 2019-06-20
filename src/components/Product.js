import React from "react";
import "../scss/Product.scss";

function Product(props) {
  return (
    <div className="product">
      <img
        className="preview"
        src={require("../products/images-shirt6.png")}
        alt="preview"
      />
      <h1 className="title">{props.name}</h1>
      <h5 className="price">Price: {props.price}</h5>
      <h5 className="dis-price">Discounted Price: {props.discounted_price}</h5>
    </div>
  );
}

export default Product;
