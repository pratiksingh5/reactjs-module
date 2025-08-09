import { createContext, useContext } from "react"

export const TaskContext = createContext({
    tasks: [],
    // declare 
    addTask: (task) => {},
    deleteTask: (id) => {},
    editTask: (task) => {},
    toggleComplete: (id) => {}
})


export const TaskProvider = TaskContext.Provider;

export const useTask = () => {
    return useContext(TaskContext)
}

// id , taskName 


// tasks = [
//     {
//         id: 1,
//         taskName: "Complete App",
//         isCompleted: true
//     },
//         {
//         id: 2,
//         taskName: "Complete App",
//         isCompleted: false
//     }
// ]

// task = {
//     id: 1,
//     taskName: "Complete App",
//     isCompleted: false
// }