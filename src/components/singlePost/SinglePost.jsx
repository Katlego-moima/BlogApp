import "./singlePost.css";
import ImgKat from "../../assets/kat-black.jpeg";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={ImgKat} alt="" />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <div className="edit">
            <i className=" singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className=" singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Kat</b>
          </span>
          <span className="singlePostDate"> 2 hours ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint ab
          cumque voluptates iusto suscipit, distinctio est eaque fugiat eius quo
          ipsum itaque tenetur reprehenderit neque veniam aliquam illo ut! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint ab
          cumque voluptates iusto suscipit, distinctio est eaque fugiat eius quo
          ipsum itaque tenetur reprehenderit neque veniam aliquam illo ut! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint ab
          cumque voluptates iusto suscipit, distinctio est eaque fugiat eius quo
          ipsum itaque tenetur reprehenderit neque veniam aliquam illo ut! Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Nisi sint ab
          cumque voluptates iusto suscipit, distinctio est eaque fugiat eius quo
          ipsum itaque tenetur reprehenderit neque veniam aliquam illo ut!
        </p>
      </div>
    </div>
  );
}
