
type TodoFormProps ={
addTodo: (title:string) =>void
}



export const TodoForm = ({addTodo}:TodoFormProps) => {
  return (
    <form className="todo-form"
      onSubmit={(e)=>{
        e.preventDefault()
      }}
    >
      <input placeholder="Nueva tarea..." />
      <button
      onClick={addTodo}
      >Agregar</button>
    </form>
  )
}
