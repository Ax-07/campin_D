import { NavLink } from "react-router-dom";
import { NavBar } from "/src/components/NavBar.jsx";
import logo from "/images/logo2.png";
import { BtnBurger } from "../components/BtnBurger";
import { NavLeft } from "./NavLeft";
import { useWindowSize } from "../utils/hooks/useWindowSize";
import { NavLeftProvider } from "../contexts/navbarContext";

export const Header = () => {
  const { windowWidth } = useWindowSize();

  return (
    <header className="header">
      <NavLink className="header__logo navBar__link" to="/">
        <img className="header__logo-img" src={logo} alt="Logo" />
      </NavLink>
      <NavLeftProvider>
      {windowWidth < 1024 ? (
        <>
          <BtnBurger windowWidth={windowWidth}/>
          <NavLeft className="header__navLeft"/>
        </>
      ) : (<NavBar className="header__nav" />)}
      </NavLeftProvider>
    </header>
  );
};
