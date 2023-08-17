import axios from "axios";
import { useState, useEffect } from "react";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      setPosts(response.data);
      console.log(response.data);
    });
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
    });
  };

  const handleDestroyPost = (id) => {
    axios.delete(`http://localhost:3000/posts/${id}.json`).then((response) => {
      console.log(response);
      setPosts(posts.filter((post) => post.id !== id));
      handleClose();
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
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <PostsNew onCreatePost={handleCreatePost} />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow
          post={currentPost}
          onUpdatePost={handleUpdatePost}
          closeModal={handleClose}
          onDestroyPost={handleDestroyPost}
        />
      </Modal>
    </div>
  );
}
