import axios from "axios";

export function PostsNew() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      event.target.reset();
    });
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
