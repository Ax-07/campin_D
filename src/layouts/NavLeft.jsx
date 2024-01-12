import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { navLeftContext } from "../contexts/navbarContext";
import { NavBar } from "../components/NavBar";
import logo from "/images/logo2.png";

export const NavLeft = () => {
  const { isNavLeftOpen,setIsNavLeftOpen, setOpenDropdown } = useContext(navLeftContext);

  const closeAll = () => {
    setIsNavLeftOpen(false);
    setOpenDropdown(null);
  }

  return (
    <>
      <div className={`navLeft ${isNavLeftOpen ? 'navLeft--open' : ''}`}>
      <NavLink className="navLeft__logo" to="/">
        <img className="navLeft__logo-img" src={logo} alt="Logo" />
      </NavLink>
        <NavBar />
      </div>
      <div className="navLeft__overlay" onClick={closeAll}></div>
    </>
  );
};