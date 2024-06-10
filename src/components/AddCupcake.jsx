import React, { useState, useContext } from "react";
import { cupcakeContext } from "../contexts/cupcakeContext";

function AddCupcake() {
  const { setCupcakeList } = useContext(cupcakeContext);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    hasDiscount: false,
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((oldState) => ({
      ...oldState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCupcakeList((prevCupcakeList) => {
      return [
        ...prevCupcakeList,
        {
          id: prevCupcakeList.length + 1,
          name: formData.name,
          price: formData.price,
          description: formData.description,
          hasDiscount: formData.hasDiscount,
        },
      ];
    });
  };

  return (
    <>
      <div className="footer">
        <form onSubmit={handleSubmit} className="form">
          <div className="inputs-box">
            <div className="form-row">
              <label htmlFor="name" className="addCupcake-label">
                Nome do Produto
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="addCupcake-input"
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="price" className="addCupcake-label">
                Preço
              </label>
              <input
                id="price"
                name="price"
                type="text"
                className="addCupcake-input"
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <label htmlFor="description" className="addCupcake-label">
                Descrição
              </label>
              <input
                id="description"
                name="description"
                type="text"
                className="addCupcake-input"
                onChange={handleChange}
              />
            </div>

            <div>
              <label
                htmlFor="hasDiscount"
                className="addCupcake-checkbox-label"
              >
                Produto em promoção
              </label>
              <input
                id="hasDiscount"
                name="hasDiscount"
                type="checkbox"
                className="addCupcake-checkbox"
                onChange={handleChange}
              />
            </div>
          </div>

          <button className="addCupcake-button">+</button>
        </form>
      </div>
    </>
  );
}

export default AddCupcake;
