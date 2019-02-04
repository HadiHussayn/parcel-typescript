import * as React from "react";
import TodoItem from "./TodoItems";
import Es from "./EmptySpace";
// class based component or stateful component
class Todos extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        text: "Go to Gym",
        done: false,
      },

      {
        id: 2,
        text: "Go to school1",
        done: true,
      },
    ]
  };

  createNewTodo = () => {
    const text = document.querySelector('#text');
    const value = text.value;
    if(value===""){
      alert("input shuld not be empty");
    }else{
      

    
    const obj = {
      text: value,
      done: false,
      id: this.state.todos.length + 1
  
    }

    this.setState({
      todos: [...this.state.todos, obj]
    })
    text.value="";
  }
  }
  render() {
    return <div class="todo" style={{ border: "1px solid black", marginLeft: "1rem" }}>
        <h1 style={{ background: "white" }}>Todos App</h1>
        <hr />
        <input type="text" id="text"/> <Es />
        <button onClick={this.createNewTodo}>Add New Todo</button>
        <hr />
        <table>
          <thead>
            <tr>
              <th>s#no</th>
              <th>todo</th>
              <Es />
            <th>status</th>
              <Es />
              <th>due/Done</th>
            </tr>
          </thead>
       
        {this.state.todos.map(item => {
          return <TodoItem text={item.text} done={item.done} id={item.id} />;
        })}
      </table>
      </div>;
  }
}

export default Todos;
