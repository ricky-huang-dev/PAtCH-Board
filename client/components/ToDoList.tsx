import { useState } from 'react'

function ToDoList() {
  const [todos, setTodos] = useState(['Buy milk', 'Cook breakfast'])
  const [todoText, setTodoText] = useState('')

  function handleAddTodo() {
    setTodos([...todos, todoText])
    setTodoText('')
  }

  return (
    <div className="toDoLists">
      <h1>Todos</h1>
      {todos.map((item, index) => (
        <>
          <li key={index}>
            <button>x</button> {item}
          </li>
        </>
      ))}
      <input
        type="text"
        name="todoText"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add todo</button>
    </div>
  )
}

export default ToDoList
