import { useState } from 'react'

type Props = {
  heading: string
}

type Todo = {
  id: number
  text: string
  completed: boolean
}

function ToDoList(props: Props) {
  const [todos, setTodos] = useState([] as Todo[])
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
        <h1>{props.heading}</h1>
      </div>

      <div className="listItems">
        {todos.map((todo) => (
          <>
            <li key={todo.id}>
              <button
                className="deleteButton"
                onClick={() => deleteTodo(todo.id)}
              >
                x
              </button>
              <button onClick={() => toggleCompleted(todo.id)}>
                <span className={todo.completed ? 'toDoCompleted' : ''}>
                  {todo.text}
                </span>
              </button>
            </li>
          </>
        ))}
        <input
          className="inputBar"
          type="text"
          name="todoText"
          placeholder={`Add to ${props.heading.toLowerCase()} list`}
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
