import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { Modal } from "./Modal";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
    console.log(post);
  };
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };
  const [currentPost, setCurrentPost] = useState({});

  useEffect(handleIndexPosts, []);
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <div>
          <h2>Title: {currentPost.title}</h2>
          <p>Body: {currentPost.body}</p>
          <p>Image: {currentPost.image}</p>
        </div>
      </Modal>
    </div>
  );
}
