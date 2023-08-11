export function PostsNew() {
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
