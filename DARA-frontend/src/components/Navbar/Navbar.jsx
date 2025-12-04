import "./Navbar.css"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">
      <div className="logo">
        <p className="logo-head">D.A.R.A.</p>
        <p className="logo-txt">Data Analysis and RESTful APIs</p>
      </div></Link>

      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/datasets">Datasets</a></li>
        <li><a href="/about">About</a></li>
      </ul>
    </nav>
  );
}
