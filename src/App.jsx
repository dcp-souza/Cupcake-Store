import React, { useState, createContext } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddCupcake from "./components/AddCupcake";
import Checkout from "./components/Checkout";
import CupcakeList from "./data/Cupcake-List";
import { cupcakeContext } from "./contexts/cupcakeContext";
import { productContext } from "./contexts/productContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const ProductList = [
    // {
    //   key: "1",
    //   id: "1",
    //   name: "cupcake",
    //   price: 12,
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   hasDiscount: true,
    //   count: 3,
    // },
  ];
  const [cupcakeList, setCupcakeList] = useState(CupcakeList);
  const [productList, setProductList] = useState(ProductList);
  return (
    <>
      <Router>
        <cupcakeContext.Provider value={{ cupcakeList, setCupcakeList }}>
          <productContext.Provider value={{ productList, setProductList }}>
            <Navbar />
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <Home />
                    <AddCupcake />
                  </>
                }
              ></Route>
              <Route
                exact
                path="/checkout"
                element={
                  <>
                    <Checkout />
                  </>
                }
              ></Route>
            </Routes>
          </productContext.Provider>
        </cupcakeContext.Provider>
      </Router>
    </>
  );
}

export default App;
