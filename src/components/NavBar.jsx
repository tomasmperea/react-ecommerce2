import { CartWidget } from "../components/CartWidget";
import "./styles/NavBar.css";
import logoNav from "../assets/img/tiger.png";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <Link to="/">
        <div>
          <img className="nav-brand" src={logoNav} alt="logo" />
        </div>
      </Link>
      <div className="navegacion">
        <NavLink
          className={({ isActive }) =>
            isActive ? "claseActive" : "claseInactive"
          }
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "claseActive" : "claseInactive"
          }
          to="/products/remeras"
        >
          Remeras
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "claseActive" : "claseInactive"
          }
          to="/products/medias"
        >
          Medias
        </NavLink>
      </div>
      <div>
        <CartWidget />
      </div>
    </nav>
  );
};
