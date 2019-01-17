import axios from "axios";

async function getPosts() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response;
}

export default getPosts;
