import React, { useState } from "react";
import "./NewTodo.css";

function NewTodo({ onhandle }) {
  const [todo, setTodo] = useState({ title: "", desc: "" });

  const handleInputChange = (e) => {
    const name = e.target.name;
    setTodo((pv) => {
      return { ...pv, [name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onhandle(todo);
    setTodo({ title: "", desc: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-field">
        <label htmlFor="title"> Title: </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleInputChange}
          value={todo.title}
        />
      </div>
      <div className="form-field">
        <label htmlFor="desc"> Desc: </label>
        <textarea
          type="text"
          name="desc"
          id="desc"
          onChange={handleInputChange}
          value={todo.desc}
        />
      </div>
      <button type="submit">
        <i className="fa fa-plus fa-spin fa-3x"></i>
      </button>
    </form>
  );
}

export default NewTodo;
