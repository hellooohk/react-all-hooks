import React, { useReducer } from "react";
import { counterReducer } from "./countReducer";
const UseReducer = () => {
  const [counter, dispatch] = useReducer(counterReducer, 0);
  return (
    <div className="container">
      <h2>useReduer hook</h2>
      <button
        className="btn btn-dark"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +
      </button>
      <span className="mx-2">{counter}</span>
      <button
        className="btn btn-dark"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -
      </button>
    </div>
  );
};

export default UseReducer;
