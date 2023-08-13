import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  };
  useEffect(handleIndexPosts, []);
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
    </div>
  );
}
