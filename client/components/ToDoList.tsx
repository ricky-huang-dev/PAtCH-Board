import { useState } from 'react'

function ToDoList() {
  const [todos, setTodos] = useState(['Buy milk', 'Cook breakfast'])
  const [todoText, setTodoText] = useState('')

  function handleAddTodo() {
    setTodos([...todos, todoText])
    setTodoText('')
  }

  return (
    <div className="toDoContainer">
      <div className="noteTitle">
        <h1>To Do List: </h1>
      </div>

      <div className="listItems">
        {todos.map((item, index) => (
          <>
            <li key={index}>
              <button className="deleteButton">x</button> {item}
            </li>
          </>
        ))}
        <input
          className="inputBar"
          type="text"
          name="todoText"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button className="addButton" onClick={handleAddTodo}>
          Add
        </button>
      </div>
    </div>
  )
}

export default ToDoList
