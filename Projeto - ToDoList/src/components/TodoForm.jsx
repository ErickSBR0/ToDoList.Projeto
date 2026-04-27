import React from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = React.useState("");
  const [category, setCategory] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Adicionar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Estudos">Estudos</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Lazer">Lazer</option>
        </select>
        <button type="submit">Adicionar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
