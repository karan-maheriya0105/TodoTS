import TodoList from "./components/TodoList";
import "./CSS/App.css";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
          <div className="headerLogo">
            <h1>What To Do</h1>
          </div>
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
