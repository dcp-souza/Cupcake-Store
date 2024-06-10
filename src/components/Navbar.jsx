import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { productContext } from "../contexts/productContext";

function Navbar() {
  const navigate = useNavigate();
  const { productList } = useContext(productContext);
  const productListSize = productList.reduce((total, product) => {
    return total + product.count;
  }, 0);

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Sugar Rush</h1>
      <div className="navbar-icons">
        <button className="navbar-home-button" onClick={() => navigate("/")}>
          <img className="navbar-home" src="src/images/home-icon.svg" />
        </button>
        <span className="navbar-vertical-bar">|</span>

        <button
          className="navbar-cart-button"
          onClick={() => navigate("/checkout")}
        >
          {productListSize > 0 && (
            <div className="cart-size-badge">{productListSize}</div>
          )}
          <img className="navbar-cart" src="src/images/cart-icon.svg" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
