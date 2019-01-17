import React, { Component } from "react";
import { connect } from "react-redux";
import { IncrementCounter, DecrementCounter } from "./redux/action";
import Person from "./Person";

class Counter extends Component {
  IncrementCounter = () => {
    this.props.IncrementCounter();
  };

  DecrementCounter = () => {
    this.props.DecrementCounter();
  };

  render() {
    console.log("render counter");
    const { count, name, age } = this.props;
    return (
      <div>
        
        <p>value count {count}</p>
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
