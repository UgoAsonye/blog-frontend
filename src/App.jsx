import axios from "axios";
import { useState } from "react";

function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <label for="title">Title:</label>
        <br></br>
        <input type="text" id="title" name="title"></input>
        <br></br>
        <label for="body">Body:</label>
        <br></br>
        <input type="text" id="body" name="body"></input>
        <br></br>
        <label for="image">Image:</label>
        <br></br>
        <input type="text" id="image" name="image"></input>
        <br></br>
      </form>
    </div>
  );
}

function PostsIndex(props) {
  console.log([props]);
  return (
    <div>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>Body: {post.body}</p>
          <button>More Info</button>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <div>
      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
    });
  };
  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load Posts</button>
      <PostsIndex posts={posts} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
