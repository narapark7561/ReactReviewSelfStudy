"use client";

import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const resetCounter = () => {
    setCounter(0);
  };

  let buttonStyles =
    "bg-blue-400 hover:bg-blue-700  active:bg-yellow-300 text-white rounded py-2 px-4 mt-5";
  if (counter >= 10 || counter == 0) {
    buttonStyles = "bg-red-200  text-white rounded py-2 px-4 mt-5";
  }
  return (
    <div className="bg-slate-300 ps-5">
      <h2 className="text-2xl">Basic Counter</h2>
      <p className="text-lg">Count: {counter}</p>
      <button onClick={incrementCounter} className={buttonStyles}>
        Increment
      </button>
      <p></p>
      <button onClick={decrementCounter} className={buttonStyles}>
        Decrement
      </button>
      <p></p>
      <button onClick={resetCounter} className={buttonStyles}>
        Reset
      </button>
    </div>
  );
}
