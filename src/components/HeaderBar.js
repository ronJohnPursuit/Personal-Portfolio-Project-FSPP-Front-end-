import { Link } from "react-router-dom";

export default function HeaderBar() {
  return (
    <nav className="nav">
      <h1>
        <Link to="/" className="navButtonHdg">
          Leaf solutions{" "}
        </Link>
      </h1>

      <button className="outerNavButton1">
        <Link className="navButton" to="/services">
          Leaf services
        </Link>
      </button>

      <button className="outerNavButton2">
        <Link className="navButton" to="/services/new">
          New service
        </Link>
      </button>
    </nav>
  );
}
