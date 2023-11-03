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
  // State to manage the list of todos and the input text for a new todo
  const [todos, setTodos] = useState([] as Todo[])
  const [todoText, setTodoText] = useState('')

  // Function to handle adding a new todo to the list
  function handleAddTodo(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newTodo = {
      id: todos.length, // Assign a unique id based on the length of the current todos list
      text: todoText, // Take the text from the input
      completed: false, // Initially set as not completed
    }

    // Update the todos state with the new todo and reset the input text
    setTodos([...todos, newTodo])
    setTodoText('')
  }

  // Function to delete a todo based on its id
  function deleteTodo(id: number) {
    // Filter out the todo with the given id and update the todos state
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  // Function to toggle the completed status of a todo
  function toggleCompleted(id: number) {
    // Map through the todos and toggle the completed status of the todo with the given id
    const newTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed, // Toggle the completed status
        }
      } else {
        return todo
      }
    })
    // Update the todos state with the modified list
    setTodos(newTodos)
  }

  return (
    // Render a container for the to-do list
    <div className="toDoContainer">
      <div className="noteTitle">
        <h1>{props.heading}</h1>
      </div>

      <div className="listItems">
        {todos.map((todo) => (
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
        ))}
        <form onSubmit={(e) => handleAddTodo(e)}>
          <input
            className="inputBar"
            type="text"
            name="todoText"
            placeholder={`Add to ${props.heading.toLowerCase()} list`}
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
            required
          />
          <button type="submit" className="addButton">
            Add
          </button>
        </form>
      </div>
    </div>
  )
}

export default ToDoList
