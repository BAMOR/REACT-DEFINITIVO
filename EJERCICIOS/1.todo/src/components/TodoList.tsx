import type { Todo } from "../types/todo"


type TodoListProps ={
  todos: Todo[]
  deleteTodo: (id:string) =>void
}

export const TodoList = ({todos, deleteTodo}:TodoListProps) => {
  return (
    <ul className="todo-list">
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.title}
        <button onClick={()=>deleteTodo(todo.id)} >eliminar</button>
        </li>
        
      ))}

    </ul>
  )
}
