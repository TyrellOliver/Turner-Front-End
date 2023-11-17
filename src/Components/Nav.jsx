import { Link } from "react-router-dom";
import "./Styles/Nav.css";

export default function Nav() {
  return (
    <nav className="navBar">
      <Link to={`/songs`}>
        <h1>Tuner</h1>
      </Link>
    </nav>
  );
}
