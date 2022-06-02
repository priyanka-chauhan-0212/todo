import React, { useState } from "react";
import Form from "./Form";
import Todo from "./Todo";
import "./styles.css";

export default function Logic() {
  const [todo, setTodo] = useState([]);

  function addtodo(t) {
    t.id = todo.length + 1;
    const newTodo = todo.concat(t);
    setTodo(newTodo);
  }

  return (
    <div className="grid">
      <div className="row">
        <div className="column">
          <Form onAdd={addtodo} />
        </div>
        <div className="column">
          <Todo todo={todo} />
        </div>
      </div>
    </div>
  );
}
