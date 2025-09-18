import { useState } from "react";
import { addTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(task))
    setTask("");
  };

  return (
    <form className="flex h-16" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
      />
      <button
        type="submit"
        className="rounded-r-lg px-8 py-1 bg-[#22a6b3] text-white shrink-0 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
