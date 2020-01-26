import React, { useState, useEffect } from "react";

import "./style.css";

function ListRange() {
  const message = "No maximo 7 ingredientes";

  const [carbo, setCarbo] = useState(0);
  const [protein, setProtein] = useState(0);
  const [vegie, setVegie] = useState(0);
  const [total, setTotal] = useState(0);
  function handleChange(event) {
    const { name, value } = event.target;
    // setCarbo(value);
    console.log(total, value, carbo * 1 + protein * 1 + vegie * 1);
    if (total <= 7) {
      if (name === "carbo") setCarbo(value);
      if (name === "protein") setProtein(value);
      if (name === "vegie") setVegie(value);
    } else {
    }
  }
  useEffect(() => {
    setTotal(parseInt(carbo) + parseInt(protein) + parseInt(vegie));
  });
  return (
    <div id="corpo-Intelli">
      <div className="title-Intelli">
        <h2>ListRange</h2>
      </div>
      <form>
        <div className="input-weekday">
          <label htmlFor="weekday"> Cardápio</label>
          <select id="weekday">
            <option value="segunda">segunda</option>
            <option value="terça">terça</option>
          </select>
        </div>
        <div className="input-meal">
          <p className="title-input-meal">Quero uma refeição com</p>
          <div className="container-range">
            <input
              type="range"
              name="carbo"
              min="0"
              max="3"
              className="range-input"
              onChange={handleChange}
              value={carbo}
            />
            <p className="range-number">{carbo}</p>
            <p className="range-text">Carbos</p>
          </div>
          <div className="container-range">
            <input
              type="range"
              name="protein"
              min="0"
              max="3"
              className="range-input"
              onChange={handleChange}
              value={protein}
            />
            <p className="range-number">{protein}</p>
            <p className="range-text">Proteinas</p>
          </div>
          <div className="container-range">
            <input
              type="range"
              name="vegie"
              min="0"
              max="3"
              className="range-input"
              onChange={handleChange}
              value={vegie}
            />
            <p className="range-number">{vegie}</p>
            <p className="range-text">Vegetal</p>
          </div>
        </div>
        <p>{total > 7 ? message : ""}</p>
        <p>{total}</p>
      </form>
    </div>
  );
}
export default ListRange;
