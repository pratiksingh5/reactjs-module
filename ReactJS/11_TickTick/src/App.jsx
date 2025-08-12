import { TaskItem, TickTickForm } from "./components";
import { TaskProvider } from "./context/TaskContext";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // const prevTasks = [
  //   {
  //     taskName: "test",
  //     id: 4,
  //   },
  //   {
  //     taskName: "hello",
  //     id: 2,
  //   },
  //   {
  //     taskName: "complete HW",
  //     id: 1,
  //   },
  // ];

  // const updatedTask = {
  //   taskName: "Updated Hello",
  //   id: 2,
  // };

  const editTask = (updatedTask) => {
    // Find the edit id
    setTasks((prevTasks) =>
      prevTasks.map((prevtask) => prevtask.id === updatedTask.id ? updatedTask : prevtask)
    );
  };

  // console.log("tasks", tasks);
  return (
    <TaskProvider value={{ tasks, addTask, editTask }}>
      <div className="bg-[#000] min-h-screen w-full flex">
        <div className="left w-[500px] bg-red-400 h-screen">
          <img
            src="https://images.pexels.com/photos/6687773/pexels-photo-6687773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            My Tasker
          </h1>
          <div className="mb-4">
            <TickTickForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {tasks.map((task) => (
              <TaskItem task={task} key={task.id} />
            ))}
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
