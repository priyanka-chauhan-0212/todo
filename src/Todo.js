import React from "react";

export default function Todo({ todo }) {
  const todos = (
    <ul>
      {todo.map((t) => (
        <li key={t.id} className={t.completed ? "completed" : ""}>
          {" "}
          Name -{t.name}
          <br />
          Email - {t.email} <br />
          Password - {t.password}
          <br />
          age-{t.age}
          <br />
          My Vehicle -{t.vehicle}
        </li>
      ))}
    </ul>
  );
  return <div className="row">{todos}</div>;
}
