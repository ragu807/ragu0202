import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 }; 
  }

  increment = () => {
    this.setState({ count: this.state.count + 10 });
  };

  decrement = ()=>{
    this.setState({count: this.state.count-10});
  }

  render() {
    return (
      <div>
        <h2>Class Counter: {this.state.count}</h2>
        <button onClick={this.increment}>+10</button>
        <button onClick={this.decrement}>-10</button>
        <h2>agent name</h2>
      </div>
    );
  }
}

export default Counter;