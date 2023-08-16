export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    props.closeModal();
    event.target.reset();
  };

  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <p>Title: {props.post.title}</p>
      <p>Body: {props.post.body}</p>
      <p>Image: {props.post.image}</p>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" defaultValue={props.post.title} />
        </div>
        <div>
          Body: <input name="body" type="text" defaultValue={props.post.body} />
        </div>
        <div>
          Image: <input name="image" type="text" defaultValue={props.post.image} />
        </div>
        <button type="submit" className="btn btn-secondary">
          Update Post
        </button>
      </form>
    </div>
  );
}
