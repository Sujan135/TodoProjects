import { useState } from "react";
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App () {
const [todos, setTodos] = useState ([])

function addTodo (title) {
    setTodos(currenttodos => {
      return [
        ...currenttodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
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
     <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}