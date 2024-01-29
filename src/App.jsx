import { useState } from "react";

function App() {
  return (
    <div className="center">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);

  function increaseStep() {
    setStep(step + 1);
  }
  function decreaseStep() {
    if (step > 1) setStep(step - 1);
  }
  function increaseCount() {
    setCount(count + step);
  }
  function decreaseCount() {
    setCount(count - step);
  }
  function adjustCount(value) {
    setCount(isNaN(value) ? 0 : Number(value));
  }
  return (
    <>
      <div className="d-flex">
        <input type="range" min="0" max="10" />
      </div>
      <div className="d-flex">
        <button onClick={decreaseCount}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => adjustCount(e.target.value)}
        />
        <button onClick={increaseCount}>+</button>
      </div>
      <div className="d-flex mt-1">
        {count < 0 && (
          <div>
            {Math.abs(count)} days ago was {date.toDateString()}
          </div>
        )}
        {count == 0 && <div>Today is {date.toDateString()}</div>}
        {count > 0 && (
          <div>
            {count} days from today is {date.toDateString()}
          </div>
        )}
      </div>
      <div className="d-flex mt-1">
        <button>Reset</button>
      </div>
    </>
  );
}

export default App;
