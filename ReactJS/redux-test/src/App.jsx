import React, { useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
// import { store } from './store'
import { store } from './redux/todoSlice'
// import { addTodo, deleteTodo } from './todoSlice'/
import { addTodo, deleteTodo } from './redux/todoSlice'

function TodoApp() {
  const [text, setText] = useState('')
  const todos = useSelector(state => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <div>
      <h2>Todo (RTK)</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={() => { if (text) { dispatch(addTodo(text)); setText('') } }}>
        Add
      </button>

      <ul>
        {todos.map(t => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => dispatch(deleteTodo(t.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  return <Provider store={store}><TodoApp /></Provider>
}
