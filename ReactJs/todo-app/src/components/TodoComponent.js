import React from "react";
class TodoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    return { todos: props.data };
  }

  render() {
    console.log(this.state.todos);
    return (
      <>
        <h1>Todo app</h1>
        <br></br>
        {this.state.todos.map((item) => (
          <div>
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <button>Done</button>
          </div>
        ))}
      </>
    );
  }
}

export default TodoComponent;
