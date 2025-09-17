import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialData = {
    todos: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState: initialData,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        }
    }
})


export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;