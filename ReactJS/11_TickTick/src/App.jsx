import { TaskItem, TickTickForm } from "./components";
import { TaskProvider } from "./context/TaskContext";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  console.log("tasks", tasks)
  return (
    <TaskProvider value={{tasks, addTask}}>
    <div className="bg-[#000] min-h-screen w-full flex">
      <div className="left w-[500px] bg-red-400 h-screen">
        <img
          src="https://images.pexels.com/photos/6687773/pexels-photo-6687773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">My Tasker</h1>
        <div className="mb-4">
          <TickTickForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
          <TaskItem/>
        </div>
      </div>
    </div>
    </TaskProvider>
  );
}

export default App;
