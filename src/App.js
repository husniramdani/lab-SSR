import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center" }}>
      <p>{count}</p>
      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: 20, padding: 12 }}
      >
        -
      </button>
      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: 20, padding: 12 }}
      >
        +
      </button>
    </div>
  );
}

export default App;
