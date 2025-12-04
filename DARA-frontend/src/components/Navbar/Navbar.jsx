import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <p className="logo-head">D.A.R.A.</p>
        <p className="logo-txt">Data Analysis and RESTful APIs</p>
      </div>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/datasets">Datasets</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}
