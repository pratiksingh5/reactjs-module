import React, { useState } from "react";
import Clock from "./components/Clock";
import Header from "./components/Header";

const App = () => {
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        padding: "4rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "4rem",
      }}
    >
      <Header isTimerRunning={isTimerRunning} setIsTimerRunning={setIsTimerRunning} />
      {isTimerRunning && <Clock />}
    </div>
  );
};

export default App;
