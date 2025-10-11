import React, { useState } from "react";
// import Child from "./components/Child";
import { MemoizedChild } from "./components/Child";

const App = () => {
  const [count, setCount] = useState(0);

  console.log("Render App/Parent Component")

  return (
    <div className="text-5xl border p-10">
      <h2 className="text-3xl">Parent Component</h2>
      <div className="bg-pink-200 p-10 text-center flex flex-col gap-8 items-center">
        <h3 className="underline">Counter App</h3>
        <p className="font-semibold text-3xl">
          Count: <span>{count}</span>
        </p>
        <div className="flex gap-4">
          <button
            className="bg-red-300 py-2 px-6 text-lg font-bold rounded-lg cursor-pointer "
            onClick={() => setCount((prevCount) => prevCount + 1)}
          >
            {" "}
            Plus{" "}
          </button>
          <button
            className="bg-red-300 py-2 px-6 text-lg font-bold rounded-lg cursor-pointer  "
            onClick={() => setCount((prevCount) => prevCount - 1)}
          >
            {" "}
            Minus{" "}
          </button>
        </div>
      </div>

      {/* <Child />  */}
      <MemoizedChild count={count}/>
    </div>
  );
};

export default App;
