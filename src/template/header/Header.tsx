import "./Header.css";
import Hi from "../../components/hi/Hi";
import Logo from "../../components/logo/Logo";

function Header() {
  return (
    <div id="header">
      <Logo />
      <Hi />
    </div>
  );
}

export default Header;
