import Cupcake from "./Cupcake";
import React, { useState, createContext, useContext } from "react";
import { cupcakeContext } from "../contexts/cupcakeContext";

function Home() {
  const { cupcakeList, setCupcakeList } = useContext(cupcakeContext);
  const cards = cupcakeList.map((item) => {
    return <Cupcake key={item.id} item={item} />;
  });
  return (
    <>
      <div className="home">
        <h1 className="home-title">Welcome</h1>
        <h2 className="home-subtitle">CRAVING SUGAR?</h2>
      </div>
      <div className="cupcake-list">{cards}</div>
    </>
  );
}

export default Home;
