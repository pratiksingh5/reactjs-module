import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    // setValue(value + 1);
    // setValue(value + 1);
    // setValue(value + 1);
    // setValue(value + 1);

    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);
    setValue((prevValue) => prevValue + 1);

  };

  // REACT UI UPDATE KARTA HAI ON THE BASIS OF STATE CHANGE 
  // BUT STATE CHANGE --> BATCHES ME 

  const handleDecrease = () => {
    setValue(value - 1)
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "0 auto",
        textAlign: "center",
        padding: "4rem",
      }}
    >
      <h1>Counter App</h1>

      <div className="count">{value}</div>

      <div className="btns">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
      </div>
    </div>
  );
};

export default App;
