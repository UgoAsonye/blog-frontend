export function PostsIndex(props) {
  console.log([props]);
  return (
    <div id="posts-index">
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} alt="" />
          <p>Body: {post.body}</p>
          <button onClick={() => props.onShowPost(post)}>More Info</button>
        </div>
      ))}
    </div>
  );
}
