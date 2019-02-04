import * as React from "react"
export default  ({ values, selected, name }) => {
  return values.map(item => {
    return (
      <div>
        <input
          defaultChecked={selected == item.value}
          type="radio"
          name={name}
          value={item.value}
        />
        <label>{item.label}</label>
      </div>
    );
  });
};
