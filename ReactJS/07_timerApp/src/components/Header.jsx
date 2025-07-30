import React from "react";

const Header = ({ isTimerRunning, setIsTimerRunning }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Timer App</h1>
      <div style={{ display: "flex", gap: "2rem" }}>
        <button
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsTimerRunning(true)
          }}
        >
          Start Timer
        </button>

        <button
          style={{
            padding: "1rem 2rem",
            backgroundColor: "#d35400",
            color: "white",
            border: "none",
            borderRadius: "16px",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsTimerRunning(false)
          }}
        >
          Stop Timer
        </button>
      </div>
    </div>
  );
};

export default Header;
