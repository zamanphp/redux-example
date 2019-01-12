import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";

export default class App extends Component {
  state = {
    name: "",
    age: ""
  };

  setName = input => {
    this.setState({ name: input.target.value });
  };

  setAge = input => {
    this.setState({ age: input.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter name={this.state.name} age={this.state.age} />

          <input
            type="text"
            value={this.state.name}
            onChange={this.setName}
            placeholder="enter your name"
          />
          <input
            type="text"
            value={this.state.age}
            onChange={this.setAge}
            placeholder="enter your age"
          />
        </header>
      </div>
    );
  }
}
