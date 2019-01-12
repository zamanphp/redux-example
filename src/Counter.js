import React, { Component } from "react";
import { connect } from "react-redux";
import { IncrementCounter, DecrementCounter } from "./redux/action";

const Person = ({ name, age }) => {
  return (
    <div>
      <h1>name : {name}</h1>
      <h2>age : {age}</h2>
    </div>
  );
};

class Counter extends Component {
  IncrementCounter = () => {
    this.props.IncrementCounter();
  };

  DecrementCounter = () => {
    this.props.DecrementCounter();
  };

  render() {
    const { ...props } = this.props;
    return (
      <div>
        <Person {...props} />
        <p>value count {this.props.count}</p>
        <button className="btn btn-primary" onClick={this.IncrementCounter}>
          +
        </button>
        {` `}
        <button className="btn btn-primary" onClick={this.DecrementCounter}>
          -
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    IncrementCounter: () => {
      dispatch(IncrementCounter());
    },
    DecrementCounter: () => {
      dispatch(DecrementCounter());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
