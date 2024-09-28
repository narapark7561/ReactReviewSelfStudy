import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0); //setCouter가 함수다!

  const incrementCounter = () => {
    if (counter < 10) {
      setCounter;
    }
  };
}
