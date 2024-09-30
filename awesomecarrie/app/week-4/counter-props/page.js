export default function CounterPropPage() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const decrementCounter = () => {
    let currentCount = counter;
    if (counter > 0) {
      setCounter(currentCount - 1);
    }
  };

  const resetCounter = () => setCounter(0);

  return (
    <main>
      <CounterWithProps
        currentCount={counter}
        incrementCounterFunction={incrementCounter}
        decrementCounterFunction={decrementCounter}
        resetCounterFunction={resetCounter}
      />
      <article>
        <p>
          this is random text dhalfhdalfadfkadlhfahdfhalhdflahlfdshaljfaldjflas
        </p>
      </article>
      <CounterDisplay currentCount={counter} />
    </main>
  );
}
