import React, { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="container">
      <h2>useState Hook</h2>
      <button  className="btn btn-secondary" onClick={decrement}>-</button>
      <span className="mx-2">{counter}</span>
      <button className="btn btn-primary" onClick={increment}>+</button>
    </div>
  );
};

export default UseState;
