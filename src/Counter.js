import React, { Component } from "react";
import { connect } from "react-redux";
import { IncrementCounter } from "./redux/action";

const Person = ({ name, age }) => {
  return (
    <div>
      <h1>name : {name}</h1>
      <h2>age : {age}</h2>
    </div>
  );
};

class Counter extends Component {
  constructor(props) {
    super(props);

    this.setCounter = this.setCounter.bind(this);
  }

  setCounter() {
    this.props.IncrementCounter();
  }

  render() {
    const { ...props } = this.props;
    return (
      <div>
        <Person {...props} />
        <p>value count {this.props.count}</p>
        <button className="btn btn-primary" onClick={this.setCounter}>
          Set Counter
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
