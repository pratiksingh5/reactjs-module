import React from "react";

const TaskItem = () => {
  return (
    <div className="flex border border-black/10 px-3 py-3 gap-x-3 shadow-sm  border-b border-b-[#767676de] duration-300  text-black w-full">
      <input type="checkbox" className="cursor-pointer" />
      <input
        type="text"
        className="outline-none w-full bg-transparent text-white"
        value="Default Text"
      />
      {/* Edit, Save Button */}
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50 cursor-pointer">
        ✏️
      </button>
      {/* Delete Todo Button */}
      <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 cursor-pointer">
        ❌
      </button>
    </div>
  );
};

export default TaskItem;
