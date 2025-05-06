import { useState, type Dispatch, type SetStateAction } from "react";
import TodoService from "../TodoService";
import type TodoTypes from "../todo";

interface PropTypes {
  setTodos: Dispatch<SetStateAction<TodoTypes[]>>;
}

const TodoForm:React.FC<PropTypes> = ({setTodos}) => {
  const [newTodoText, setNewTodoText] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = TodoService.addTodo(newTodoText);
      setTodos((prevTodos) => [...prevTodos, newTodo]); // Update the state with the new todo
      setNewTodoText(""); // Clear the input field after adding the todo
    }
  };

  return <div className="inputForm">
    <input
      type="text"
      value={newTodoText}
      onChange={(e) => setNewTodoText(e.target.value)}
      placeholder="Add a new todo..."
      autoFocus={true}
    />
    <button onClick={handleAddTodo}>Add Todo</button>
  </div>;
};

export default TodoForm;
