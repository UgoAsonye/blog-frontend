function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

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

      <div id="posts-index">
        <h1>All posts</h1>
        <h2>Pic 1</h2>
        <p>
          The creature-for I am very angry with him-made a low bow and with a grin the most malicious I ever saw, "My
          Lord," said he, "far be it from me to accuse the lady, for having the discernment to distinguish and
          prefer-the superior attractions of your Lordship."
        </p>
        <img src="https://picsum.photos/id/237/536/354" width="300px"></img> <br></br>
        <h2>Pic 2</h2>
        <p>
          Was ever any thing so provoking? I was ready to die with shame. "What a coxcomb!" exclaimed Lord Orville:
          while I, without knowing what I did, rose hastily, and moving off, "I can't imagine," cried I, "where Mrs.
          Mirvan has hid herself!"
        </p>
        <img src="https://picsum.photos/536/354" width="300px"></img>
      </div>

      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

export default App;
