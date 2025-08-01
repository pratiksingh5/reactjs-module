import React, { useState, useEffect } from "react";
import { use } from "react";

const Clock = () => {
  const [time, setTimer] = useState(10);

  useEffect(() => {
    console.log("Clock Comoponent Mount Hua");

    setInterval(() => {
        // setTimer(time - 1)

        setTimer((prev) => {
            if(prev > 0) {
                return prev - 1
            }
        })
        
    }, 1000)

    return () => {
    console.log("Clock Comoponent UNMOUNT Hua");
    }
  }, []);

  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "#8e44ad",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "4rem" }}>{time}</h2>
      </div>
    </div>
  );
};

export default Clock;
