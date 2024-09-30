export default function FunctionPage() {
  const helloWorld2 = (username, dayofWeek) => {
    return `Hello ${username}! Welcome Back! Today is ${dayofWeek}`;
  };

  const helloMath = (a, b) => {
    return `${a} add ${b} is ${a + b}`;
  };

  const louder = (textFunc, username) => {
    let thisText = textFunc(username);
    return `${thisText.toUpperCase()}!!!!!!`;
  };

  return (
    <main>
      <h1>Functions</h1>
      <p>{helloWorld2("Nara", "Sunday")}</p>
      <p>{helloMath(2, 3)}</p>
      <h2>Higer order functions</h2>
      <p>{louder(helloWorld2, "Chai")}</p>
    </main>
  );
}
