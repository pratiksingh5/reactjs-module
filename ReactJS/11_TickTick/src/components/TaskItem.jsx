import React, { useState } from "react";
import { useTask } from "../context/TaskContext";

const TaskItem = ({ task, id }) => {
  const { editTask, deleteTask, toggleComplete } = useTask();
  const [isTaskEditable, setIsTaskEditable] = useState(false);
  const [updatedTaskName, setUpdatedTaskName] = useState(task.taskName);

  const handleUpdateTask = () => {
    const updatedTask = { ...task, taskName: updatedTaskName };
    editTask(updatedTask);
  };

  // const handleDelete =() => {
  //   console.log("Hey Delete")
  // }

  return (
    <div
      className="flex border border-black/10 px-3 py-3 gap-x-3 shadow-sm  border-b border-b-[#767676de] duration-300  text-black w-full"
      key={id}
    >
      <input type="checkbox" className="cursor-pointer" checked = {task.isCompleted} onChange={(e) => toggleComplete(id, e.target.checked)}/>
      <input
        type="text"
        className={`outline-none w-full  rounded-md text-white ${task.isCompleted ? "line-through bg-green-400" : "" }  ${
          isTaskEditable ? "border border-[#ffffff64] rounded-md" : ""
        }`}
        value={updatedTaskName}
        onChange={(e) => setUpdatedTaskName(e.target.value)}
        readOnly={!isTaskEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer"
        onClick={() => {
          if (isTaskEditable) {
            handleUpdateTask();
            setIsTaskEditable(false);
          } else {
            setIsTaskEditable((prev) => !prev);
          }
        }}
      >
        {isTaskEditable ? "📃" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer" onClick={() => deleteTask(id)} >
        ❌
      </button>
    </div>
  );
};

export default TaskItem;
