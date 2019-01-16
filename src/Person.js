import React, { PureComponent } from "react";
import getPosts from "./api";

class Person extends PureComponent {
  state = {
    posts: []
  };

  componentDidMount() {
    getPosts().then(response => {
      this.setState({
        posts: response.data
      });
    });
  }

  __renderTable = posts => {
    const html = posts.map(post => {
      return (
        <tr key={post.id}>
          <td>{post.title}</td>
          <td>{post.body}</td>
        </tr>
      );
    });

    return (
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>body</th>
          </tr>
          {html}
        </thead>
      </table>
    );
  };

  render() {
    console.log("render person");
    const { name, age } = this.props;
    const { posts } = this.state;
    return (
      <div>
        <h1>name : {name}</h1>
        <h2>age : {age}</h2>
        <hr />
        {posts.length > 0 && this.__renderTable(posts)}
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
