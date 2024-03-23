import React, { useState } from "react";
import Todos from "./Todos";
import "./Home.css";
import NewTodo from "./NewTodo";
import { v4 as uuidv4 } from "uuid";

function Home() {
  const [todos, setTodos] = useState([]);

  const newTodoHandle = (newTodo) => {
    setTodos((pv) => {
      return [...pv, { id: uuidv4(), newTodo }];
    });
  };

  const handleRemoveTodo = (RemoveId) => {
    const filteredTodos = todos.filter((todo) => todo.id !== RemoveId);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <h1 style={{ color: "white" }}>Todo App</h1>
      <NewTodo onhandle={newTodoHandle} />
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
    </div>
  );
}

export default Home;
