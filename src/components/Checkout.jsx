import React from "react";
import CheckoutProducts from "./CheckoutProducts";
import { useContext } from "react";
import { productContext } from "../contexts/productContext";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const { productList, setProductList } = useContext(productContext);
  const formatNumber = (num, decimals) => {
    return num.toFixed(decimals);
  };
  const products = productList.map((item) => {
    return <CheckoutProducts key={item.id} item={item} />;
  });
  const totalPrice = productList.reduce((total, product) => {
    const productTotal = product.price * product.count;
    return total + productTotal;
  }, 0);

  const discountedPrice = productList.reduce((total, product) => {
    const productTotal = product.hasDiscount
      ? product.price * product.count * 0.7
      : product.price * product.count;
    return total + productTotal;
  }, 0);

  return (
    <div className="checkout">
      {productList.length > 0 ? (
        <div className="filled-checkout">
          <div className="products-list">{products}</div>
          <div className="products-price">
            <h3 className="subtotal-price">
              Total em produtos: R${formatNumber(totalPrice, 2)}{" "}
            </h3>
            <h3 className="discounted-price">
              Desconto em produtos: R$
              {formatNumber(totalPrice - discountedPrice, 2)}
            </h3>
            <h1 className="total-price">
              Total: R${formatNumber(discountedPrice, 2)}{" "}
            </h1>
            <button className="checkout-button">Fechar pedido</button>
          </div>
        </div>
      ) : (
        <div className="empty-checkout">
          <div className="empty-checkout-text">
            Seu carrinho está vazio ;&#40;{" "}
          </div>
          <button
            className="empty-checkout-button"
            onClick={() => navigate("/")}
          >
            Voltar à página inicial
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
