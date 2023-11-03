import React, { useState } from "react";
function Counter() {
  let [count, setCount] = useState(7);
  console.log(count);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          //   count++;
          setCount(count + 1);
          console.log(count);
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          //   count--;
          setCount(count - 1);
          console.log(count);
        }}
      >
        Down
      </button>
    </div>
  );
}
export default Counter;
