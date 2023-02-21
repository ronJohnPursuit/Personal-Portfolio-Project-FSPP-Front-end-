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
      {/* <button className="outerNavButton3">
        <Link className="navButton" to="/Contact">
          Contact Us
        </Link>
      </button> */}

      <button className="outerNavButton4">
        <Link className="navButton" to="/About_Us">
          About Us
        </Link>
      </button>
    </nav>
  );
}
