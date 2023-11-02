import { useState } from 'react'

function ToDoList() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: 'buy milk',
      completed: false,
    },

    {
      id: 1,
      text: 'make breakfast',
      completed: true,
    },
  ])
  const [todoText, setTodoText] = useState('')

  function handleAddTodo() {
    const newTodo = {
      id: todos.length,
      text: todoText,
      completed: false,
    }

    setTodos([...todos, newTodo])
    setTodoText('')
  }

  function deleteTodo(id: number) {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  function toggleCompleted(id: number) {
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      } else {
        return todo
      }
    })
    setTodos(newTodos)
  }

  return (
    <div className="toDoContainer">
      <div className="noteTitle">
        <h1>Hello World</h1>
      </div>

      <div className="listItems">
        {todos.map((todo) => (
          <>
            <li key={todo.id}>
              <button onClick={() => deleteTodo(todo.id)}>x</button>
              <button onClick={() => toggleCompleted(todo.id)}>
                <span className={todo.completed ? 'toDoCompleted' : ''}>
                  {todo.text}
                </span>
              </button>
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
    </div>
  )
}

export default ToDoList
