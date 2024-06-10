import React, { useContext } from "react";
import { productContext } from "../contexts/productContext";

export default function Cupcake(props) {
  const { productList, setProductList } = useContext(productContext);
  const addToCart = () => {
    setProductList((prevProductList) => {
      const alreadyExists = productList.findIndex(
        (element) => element.id === props.item.id
      );
      if (alreadyExists === -1) {
        return [
          ...prevProductList,
          {
            key: props.item.id,
            id: props.item.id,
            name: props.item.name,
            price: props.item.price,
            desc: props.item.desc,
            hasDiscount: props.item.hasDiscount,
            count: 1,
          },
        ];
      } else {
        const updatedProductList = [...prevProductList];
        updatedProductList[alreadyExists].count += 1;
        return updatedProductList;
      }
    });
  };
  return (
    <>
      <div
        className="cupcake-card"
        style={{
          backgroundColor: props.item.hasDiscount ? "#4fff4f8e" : "white",
        }}
      >
        <div className="addToCart-button-wrapper">
          <button className="addToCart-button" onClick={addToCart}>
            Adicionar ao carrinho
          </button>
        </div>

        <div className="cupcake-wrapper">
          {props.item.hasDiscount && (
            <div className="cupcake-discount-badge">-30%</div>
          )}
          <img className="cupcake-icon" src="src/images/Cupcake-icon.svg" />
          <h1 className="cupcake-name">{props.item.name}</h1>
        </div>
      </div>
    </>
  );
}
