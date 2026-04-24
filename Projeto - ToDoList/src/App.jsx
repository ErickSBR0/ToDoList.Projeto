import { useState } from "react";
import "./App.css";

//componentes
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Estudar ReactJS",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Fazer exercícios de JavaScript",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Ler um livro",
      category: "Lazer",
      isCompleted: false,
    },
  ]);

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todo.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default App;
