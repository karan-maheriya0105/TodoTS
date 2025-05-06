import type TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {
  //Get Todos from local storage
  getTodos: (): TodoTypes[] => {
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  },

  //Add Todo to local storage
  addTodo: (text: string): TodoTypes => {
    const todos = TodoService.getTodos();
    const newTodo: TodoTypes = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    return newTodo;
  },

  //Update Todo in local storage
  updateTodo: (todo: TodoTypes): TodoTypes => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    return todo;
  },

  //!Delete Todo from local storage
  deleteTodo: (id: number): void => {
    const todos = TodoService.getTodos();
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
  },
};

export default TodoService;
