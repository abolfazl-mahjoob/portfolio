import { Link } from "react-router-dom";
import "./Logo.css";

function Logo() {
  return (
    <Link className="logo" to={"/"}>
      <img width="100" src="/logo.png" alt="abolfazl mr" />
    </Link>
  );
}

export default Logo;
