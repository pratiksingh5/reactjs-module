import { configureStore } from '@reduxjs/toolkit'
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = { todos: [] }

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload }
      state.todos.push(todo) // mutate draft -> Immer makes immutable next state
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload)
    },
  },
})

export const { addTodo, deleteTodo } = todoSlice.actions

export const store = configureStore({
  reducer: { todo: todoSlice.reducer },
})

export default todoSlice.reducer
