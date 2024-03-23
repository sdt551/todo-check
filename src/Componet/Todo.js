import React from "react";
import "./Todo.css";

function Todo({ todo, id, onRemoveTodo }) {
  const { title, desc } = todo;

  const handleClick = (id) => {
    onRemoveTodo(id);
  };
  return (
    <article className="todo">
      <div>
        <h1>{title.toUpperCase()}</h1>
        <p>{desc.toUpperCase()}</p>
      </div>
      <div>
        <button
          className="btn"
          onClick={() => {
            handleClick(id);
          }}
        >
          <i className="fa fa-trash fa-3x"></i>
        </button>
      </div>
    </article>
  );
}

export default Todo;
