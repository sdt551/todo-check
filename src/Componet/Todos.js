import React from "react";
import Todo from "./Todo";
import "./Todos.css";

function Todos({ todos, onRemoveTodo }) {
  return (
    <section className="todos">
      {todos.map((todo) => (
        <Todo
          todo={todo.newTodo}
          key={todo.id}
          id={todo.id}
          onRemoveTodo={onRemoveTodo}
        />
      ))}
    </section>
  );
}

export default Todos;
