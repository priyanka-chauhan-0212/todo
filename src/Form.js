import React, { useState } from "react";
import "./styles.css";
import Checkbox from "./Checkbox";

export default function Form({ onAdd, todo }) {
  const initialState = {
    id: 0,
    name: "hh",
    email: "hh",
    password: "hh",
    vehicle: [],
    age: "2",
    completed: false
  };
  const [vehicle, setVehicle] = useState([]);
  const [t, setT] = useState(initialState);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setT((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setVehicle(vehicle);
    let newT = { ...t, vehicle: vehicle };
    alert("saved.");
    console.log(newT);
    onAdd(newT);
    setT(initialState);
  };

  return (
    <>
      <h2>registration form</h2>
      <form id="todo" onSubmit={handleSubmit}>
        <table className="tbl">
          <tr>
            <th>
              <label>Enter your name: </label>
            </th>
            <td>
              <input
                type="text"
                name="name"
                defaultValue={""}
                onChange={handleChange}
              />
            </td>
          </tr>

          <tr>
            <th>
              <label>Enter your E-mail: </label>
            </th>
            <td>
              <input
                type="text"
                name="email"
                defaultValue={""}
                onChange={handleChange}
              />
            </td>
          </tr>

          <tr>
            <th>
              <label>Enter your password: </label>
            </th>
            <td>
              <input
                type="password"
                name="password"
                defaultValue={""}
                onChange={handleChange}
              />
            </td>
          </tr>

          <tr>
            <th>
              <label>Enter your age:</label>{" "}
            </th>
            <td>
              <input
                type="number"
                name="age"
                defaultValue={""}
                onChange={handleChange}
              />
            </td>
          </tr>
          <Checkbox current={vehicle} setCurrent={setVehicle} />
          <br />
          <tr>
            <th>
              <button type="submit">SUBMIT</button>
            </th>
          </tr>
        </table>
      </form>
    </>
  );
}
