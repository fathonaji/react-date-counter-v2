function App() {
  return (
    <div className="center">
      <Counter />
    </div>
  );
}

function Counter() {
  return (
    <>
      <div className="d-flex">
        <input type="range" min="0" max="10" />
      </div>
      <div className="d-flex">
        <button>-</button>
        <input type="text" value="0" />
        <button>+</button>
      </div>
      <div className="d-flex mt-1">1 days from today is x</div>
      <div className="d-flex mt-1">
        <button>Reset</button>
      </div>
    </>
  );
}

export default App;
