import { TaskItem, TickTickForm } from "./components";
import { TaskProvider } from "./context/TaskContext";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));

  // localStorage.getItem("tasks") -- string 

  // tasks --> array 
  // JSON.parse 

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  useEffect(() => {
    // console.log("kuch change hua task me");

    // tasks --> array of objects
    // JSON.stringify 
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

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
      prevTasks.map((prevtask) =>
        prevtask.id === updatedTask.id ? updatedTask : prevtask
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // isCompleted -> old -> true --> false
  // isCompleted -> old -> false --> true

  // isCompleted = !isCompleted

  const toggleComplete = (id, isCompleted) => {
    // console.log("id", id);
    // console.log("isCompleted", isCompleted);

    // console.log("tasks", tasks)
    setTasks((prevTasks) =>
      prevTasks.map((prevtask) =>
        prevtask.id === id
          ? { ...prevtask, isCompleted: isCompleted }
          : prevtask
      )
    );
  };

  //   let obj = {id: 1, name: "Nupur", isHWDone: false};

  //  let task = {
  //   id: 12,
  //   taskName: "Test",
  //   isCompleted: false,
  //   isHWDone: false
  //  }

  // []--> ARRAY
  // {} --> OBJECT

  // {...task , isCompleted: true}

  // output
  // let obj = {id: 1, name: "Nupur", isHWDone: true};

  // obj.isHWDone = true;

  // console.log("obj", obj)

  // console.log("tasks", tasks);
  return (
    <TaskProvider
      value={{ tasks, addTask, editTask, deleteTask, toggleComplete }}
    >
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
            {tasks && tasks.lengh && tasks.map((task) => (
              <TaskItem task={task} id={task.id} />
            ))}
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
