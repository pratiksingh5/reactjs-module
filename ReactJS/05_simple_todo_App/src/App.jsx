import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  console.log("todos", todos);

  return (
    <div className="container">
      <h1>Todo App</h1>

      <div className="todo-form">
        <input
          type="text"
          placeholder="Write your task"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={value}
        />
        <button
          onClick={() => {
            setTodos([...todos, value]);
            setValue("")
          }}
        >
          Add
        </button>
      </div>

      <div className="task-container">
        <h1>All tasks</h1>

        <ul>
          {todos.map((todo, i) => (
            <li key={i}>
              <span>{todo}</span>{" "}
              <i className="ri-delete-bin-line"></i>

              {/* HW -- Hint setTodos -- Filter  */}
            </li>
          ))}{" "}
        </ul>
      </div>
    </div>
  );
};

export default App;
