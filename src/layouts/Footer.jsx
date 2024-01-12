import { NavLink } from "react-router-dom";
import logo from "/images/coloredLogoDevesset.png";
import { DropLink } from "../components/DropLink";

export const Footer = () => {
  return (
    <footer className="footer">
      <NavLink className="navBar__link" to="/">
        <img className="footer__logo logo" src={logo} alt="Logo" />
      </NavLink>
      <DropLink title="Mentions Legales" to="/">
        <NavLink className="navBar__link" to="/">Contact</NavLink>
        <NavLink className="navBar__link" to="/">Accés</NavLink>
      </DropLink>
      <div className="footer__copyright">Camping du lac de Devesset</div>
    </footer>
  );
};
