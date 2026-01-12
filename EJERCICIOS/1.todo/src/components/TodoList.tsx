import type { Todo } from "../types/todo"


type TodoListProps ={
  todos: Todo[]
}

export const TodoList = ({todos}:TodoListProps) => {
  return (
    <ul className="todo-list">
      {todos.map((todo)=>(
        <li key={todo.id}>{todo.title}</li>
      ))}

    </ul>
  )
}
