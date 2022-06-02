import React, { useState } from "react";

export default function Checkbox({ current, setCurrent }) {
  const [inputs, setInputs] = useState(current);

  const MyVehicle = ["car", "bicycle", "bike"];

  const handleChange = (event) => {
    if (event.target.checked) {
      let val = event.target.value;
      let newInputs = [...inputs, val];
      setCurrent(newInputs);
      setInputs(newInputs);
    } else {
      let val = event.target.value;
      let newV = inputs.filter((veh) => veh !== val);

      setCurrent(newV);
      setInputs(newV);
    }
  };

  return (
    <>
      <tr colspan="2">
        <th>
          <label>My Vehicle :</label>
        </th>
        <td>
          {MyVehicle.map((cur, ind) => (
            <div key={ind} className="checks">
              <label>
                <input
                  type="checkbox"
                  name={cur}
                  value={cur}
                  onChange={handleChange}
                />
                {cur}
              </label>
            </div>
          ))}
        </td>
      </tr>
    </>
  );
}
