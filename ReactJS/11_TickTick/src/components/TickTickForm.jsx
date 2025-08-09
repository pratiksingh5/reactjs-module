import React, { useState } from "react";
import { useTask } from "../context/TaskContext";

const TickTickForm = () => {
  const [taskName, setTaskName] = useState("");
  const { addTask } = useTask()

  const handleSubmit = (e) => {
    if(!taskName) return;
    
    e.preventDefault();

    const task = {
        id: Date.now(),
        taskName: taskName,
        isCompleted: false
    }

    console.log("Task Added", task);
    addTask(task);
    setTaskName("")

  }

  return (
    <form className="flex">
      <input
        type="text"
        placeholder="Write your task..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-[#22a6b3] text-white shrink-0 cursor-pointer"
        onClick={handleSubmit}
      >
        Add
      </button>
    </form>
  );
};

export default TickTickForm;
