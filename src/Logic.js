import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";

export default function Logic() {
  const [todo, setTodo] = useState([]);

  function addtodo(t) {
    t.id = todo.length + 1;
    const newTodo = todo.concat(t);
    setTodo(newTodo);
  }

  return (
    <div className="grid">
      <Form onAdd={addtodo} />
      <Todo todo={todo} />
    </div>
  );
}
