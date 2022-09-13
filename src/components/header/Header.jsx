import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSM">React & Node</span>
        <span className="headerTitleLG">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/7604425/pexels-photo-7604425.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="no pic"
      />
    </div>
  );
}
