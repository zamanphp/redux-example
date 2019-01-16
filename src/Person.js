import React, { PureComponent } from "react";

class Person extends PureComponent {
  render() {
    console.log("render person");
    const { name, age } = this.props;
    return (
      <div>
        <h1>name : {name}</h1>
        <h2>age : {age}</h2>
      </div>
    );
  }
}

export default Person;

/*
import React, { memo } from "react";

const Person = props => {
  console.log("render person");
  const { name, age } = props;
  return (
    <div>
      <h1>name : {name}</h1>
      <h2>age : {age}</h2>
    </div>
  );
};

export default memo(Person);
*/
