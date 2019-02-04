import * as React from "react";
import ES from "./EmptySpace";
const TodoItem = props => {
  const { text, done, id } = props;

  return <tbody>
      <tr>
        <td>{id}</td>
        <td>{text}</td>
        <td>{done}</td>
        <td>
          <button>{done ? "Delete" : "Done"}</button>
        </td>
      <td><span style={{ fontSize: "10px" }}>{done ? "Done" : "Due"}</span></td>
      </tr>
    </tbody>;
    // <li style={{ marginTop: "10px", listStyleType: "none" }}>
    //   <span>{id}</span>
    //   <ES />
    //   <span>{text}</span>
    //   <ES />
    //   <span style={{ fontSize: "10px" }}>{done ? "Done" : "Due"}</span>
    //   <ES />

    //   <span>

    //   </span>
    // </li>
};

export default TodoItem;
