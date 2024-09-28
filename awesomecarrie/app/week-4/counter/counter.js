import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0); //setCouter가 함수다!

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

  return (
    <div>
      <h2>Basic Counter</h2>
      <p>Count: {counter}</p>
      <button onClick={incrementCounter}> Increment </button>
      <button onClick={decrementCounter}> Decrement </button>
      <button onClick={resetCounter}> Reset </button>
    </div>
  );
}
