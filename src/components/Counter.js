import React, { useState } from "react";

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [text, setText] = useState("count");

  return (
    <div>
      <p>
        The current {text || "count"} is: {count}
      </p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(initialCount)}>RESET</button>
      <br />
      <input value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
}

Counter.defaultProps = {
  initialCount: 0,
};

export default Counter;
