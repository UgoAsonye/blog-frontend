export function PostsIndex(props) {
  console.log([props]);
  return (
    <div className="row m-auto">
      {props.posts.map((post) => (
        <div key={post.id} className="card posts col-6 p-0 m-2" style={{ width: "15 rem" }}>
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <img src={post.image} className="card-img-top" alt={post.title} />
            <p className="card-text">Body: {post.body}</p>
            <button onClick={() => props.onShowPost(post)}>More Info</button>
          </div>
        </div>
      ))}
    </div>
  );
}
