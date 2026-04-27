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

  const addTodo = (text, category) => {
    const newTodo = [
      ...todo,
      {
        id: Math.random(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodo(newTodo);
  };

  const removeTodo = (id) => {
    const newTodos = [...todo];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null,
    );
    setTodo(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todo];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo,
    );
    setTodo(newTodos);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todo.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
