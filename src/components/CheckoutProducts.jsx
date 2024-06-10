import React from "react";
import { useContext } from "react";
import { productContext } from "../contexts/productContext";

function CheckoutProducts(props) {
  const formatNumber = (num, decimals) => {
    return num.toFixed(decimals);
  };

  const { setProductList } = useContext(productContext);

  const onQuantityChange = (productId, count) => {
    setProductList((oldState) => {
      return oldState.map((item) =>
        item.id === productId ? { ...item, count: parseInt(count) } : item
      );
    });
  };

  return (
    <div className="product-card">
      <img src="src/images/Cupcake-icon.svg" className="product-img" />
      <div className="product-details">
        <h1 className="product-name">{props.item.name}</h1>
        {props.item.hasDiscount ? (
          <>
            <h4 className="old-product-price">
              R${formatNumber(props.item.count * props.item.price, 2)}
            </h4>
            <h2 className="product-price">
              R${formatNumber(0.7 * props.item.count * props.item.price, 2)}
            </h2>
          </>
        ) : (
          <h2 className="product-price">
            R${formatNumber(props.item.count * props.item.price, 2)}
          </h2>
        )}
        <h3 className="product-desc">{props.item.desc}</h3>
      </div>
      <div className="product-count-row">
        <label htmlFor="count" className="product-count-label">
          Quantidade
        </label>
        <select
          id="count"
          className="product-count"
          value={props.item.count}
          onChange={(event) => {
            onQuantityChange(props.item.id, event.target.value);
          }}
        >
          {[...Array(10).keys()].map((number) => {
            const num = number + 1;
            return (
              <option value={num} key={num}>
                {num}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default CheckoutProducts;

//props: name, price, desc, hasDiscount
