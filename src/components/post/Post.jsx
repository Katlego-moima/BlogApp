import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/799443/pexels-photo-799443.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="no pic"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCats">Music</span>
          <span className="postCats">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">Date</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        eligendi vel officia numquam beatae assumenda asperiores porro repellat
        ad atque placeat dolorem, corrupti quos magni, deserunt nemo ipsum rerum
        recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi eligendi vel officia numquam beatae assumenda asperiores porro
        repellat ad atque placeat dolorem, corrupti quos magni, deserunt nemo
        ipsum rerum recusandae! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Excepturi eligendi vel officia numquam beatae
        assumenda asperiores porro repellat ad atque placeat dolorem, corrupti
        quos magni, deserunt nemo ipsum rerum recusandae! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Excepturi eligendi vel officia
        numquam beatae assumenda asperiores porro repellat ad atque placeat
        dolorem, corrupti quos magni, deserunt nemo ipsum rerum recusandae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        eligendi vel officia numquam beatae assumenda asperiores porro repellat
        ad atque placeat dolorem, corrupti quos magni, deserunt nemo ipsum rerum
        recusandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Excepturi eligendi vel officia numquam beatae assumenda asperiores porro
        repellat ad atque placeat dolorem, corrupti quos magni, deserunt nemo
        ipsum rerum recusandae!
      </p>
    </div>
  );
}
