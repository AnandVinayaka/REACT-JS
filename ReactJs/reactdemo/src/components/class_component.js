import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  Addone = () => {
    this.setState({
        count: this.state.count + 1
    });
  }

  Minusone = () => {
    this.setState({
        count: this.state.count - 1
    });
  }



  render() {
    return (
      <>
       <button onClick={this.Minusone}>Minus One</button>
        <h2>Count : {this.state.count}</h2>
        <button onClick={this.Addone}>Add One</button>
      </>
    )
  }
}

export default Counter;