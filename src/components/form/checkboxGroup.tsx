import * as React from "react"

export default  ({ values, selected, label, name }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      {values.map(item => {
        const isSelected = selected.includes(item);
        return (
          <label>
            <input
              type="checkbox"
              value={item}
              name={name}
              defaultChecked={isSelected}
            />{" "}
            {item}
          </label>
        );
      })}
    </div>
  );
};
