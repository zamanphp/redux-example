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
    console.log("render app");
    const { name, age } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Counter name={name} age={age} />
          <input
            type="text"
            value={name}
            onChange={this.setName}
            placeholder="enter your name"
          />
          <input
            type="text"
            value={age}
            onChange={this.setAge}
            placeholder="enter your age"
          />
        </header>
      </div>
    );
  }
}
