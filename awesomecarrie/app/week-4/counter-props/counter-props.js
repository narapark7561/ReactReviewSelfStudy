export default function CounterWithProps({
  currentCount,
  incrementCounterFunction,
  decrementCounterFunction,
  resetCounterFunction,
}) {
  let buttonStyles =
    "bg-blue-400 hover:bg-blue-700  active:bg-yellow-300 text-white rounded py-2 px-4 mt-5";
  let resetStyles =
    "bg-blue-400 hover:bg-blue-700  active:bg-yellow-300 text-white rounded py-2 px-4 mt-5";
  if (currentCount >= 10) {
    buttonStyles = "bg-grey-500  text-white rounded py-2 px-4 mt-5";
  }
  return (
    <div className="bg-slate-300 p-5">
      <h2 className="text-2xl">Basic Increment Counter</h2>
      <p className="text-lg">Count: {currentCount} </p>
      <button onClick={incrementCounterFunction} className={buttonStyles}>
        Increment!
      </button>
      {/* <button onClick={setCounter}>Increment!</button> 할수없다. 이벤트핸들러를바로불러올수는없다. */}
      <p></p>
      <button onClick={decrementCounterFunction} className={buttonStyles}>
        Decrement!
      </button>
      <p></p>
      <button onClick={resetCounterFunction} className={resetStyles}>
        Reset Counter
      </button>
    </div>
  );
}
