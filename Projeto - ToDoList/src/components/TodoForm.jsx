import React from "react";

const TodoForm = () => {
  return (
    <div>
      <h2>Adicionar Nova Tarefa</h2>
      <form action="">
        <input type="text" placeholder="Digite o título" />
        <select>
          <option value="">Selecione um categoria</option>
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
