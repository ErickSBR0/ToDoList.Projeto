import { useState } from "react";
import "./App.css";

//componentes
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";

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

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

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
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todo
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted,
          )
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase()),
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text),
          )
          .map((todo) => (
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
