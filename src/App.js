import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";

export default class App extends Component {
  state = {
    name: ""
  };

  setName = el => {
    this.setState({ name: el.target.value });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter name={this.state.name} age="19" />
        </header>
        <input
          type="text"
          value={this.state.name}
          onChange={this.setName}
          placeholder="enter your name"
        />
      </div>
    );
  }
}
