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
        src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="no pic"
      />
    </div>
  );
}
