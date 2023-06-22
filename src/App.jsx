import { useState } from "react";
import "./styles.css"

export default function App () {
  const [newItem, setNewItem] = useState ("")
  const [todos, setTodos] = useState ([])

  
  function handleSubmit (e) {
    e.preventDefault()

    setTodos((currenttodos) => {
      return[
        ...currenttodos, 
        {id:crypto.randomUUID(),
        title: newItem,
       completed: false},
    ]
  })

  setNewItem('')
}

function toggleTodo (id, completed) {
  setTodos (currenttodos => {
    return currenttodos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed }
      }
      return todo
    })
  })
}

function deleteTodo (id) {
  setTodos (currenttodos => {
    return currenttodos.filter (todo => todo.id !== id)
 })
}

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item"></input>
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length ===0 && "No Todos"}
        {todos.map(todo => {
          return (
          <li key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo (todo.id, e.target.checked)}></input>
            {todo.title}
          </label>
          <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
        </li>
          )
        })}
        </ul>
    </>
  );
}