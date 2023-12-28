import { NavLink } from "react-router-dom";
import { NavBar } from "/src/components/NavBar";
import logo from "/images/logo-lac-devesset.png";

export const Header = () => {
  return (
    <div className="header">
      <NavLink className="navBar__link" to="/">
        <img className="header__logo logo" src={logo} alt="Logo" />
        </NavLink>
      <NavBar className="header__nav" />
    </div>
  );
};
