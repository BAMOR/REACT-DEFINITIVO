import { useState } from "react";
import type { Todo } from "../types/todo";

type TodoFormProps = {
  addTodo: (title: string) => void;
  editingId: string | null;
  setEditingId: (id: string | null) => void;
  todos: Todo[];
};

export const TodoForm = ({ addTodo, editingId, setEditingId, todos }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    addTodo(inputValue);
    setInputValue(""); // limpia el input
  };

  // Cambiar el texto del botón según si estás editando o no
  const buttonText = editingId ? "Actualizar" : "Agregar";

  return (
    <>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          placeholder={editingId ? "Edita tu tarea..." : "Nueva tarea..."}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">{buttonText}</button>
      </form>

      {/* Botones de edición debajo del formulario */}
      <div className="edit-buttons" style={{ marginTop: "1rem" }}>
        {todos.map((todo) => (
          <button
            key={todo.id}
            type="button"
            onClick={() => {
              setInputValue(todo.title);
              setEditingId(todo.id);
            }}
            style={{ marginRight: "0.5rem", marginBottom: "0.5rem" }}
          >
            Editar "{todo.title}"
          </button>
        ))}
      </div>
    </>
  );
};