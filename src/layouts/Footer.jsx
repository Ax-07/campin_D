import { NavLink } from "react-router-dom";
import logo from "/images/logo-lac-devesset.png";


export const Footer = () => {
    return (
        <div className="footer">
      <NavLink className="navBar__link" to="/">
        <img className="footer__logo logo" src={logo} alt="Logo" />
        </NavLink>
            <div className="footer__copyright">Camping du lac de Devesset</div>
        </div>
    );
};
