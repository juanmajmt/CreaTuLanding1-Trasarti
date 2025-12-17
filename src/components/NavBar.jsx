import { NavLink, Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-main">REPUeSTOP</span>
          <span className="navbar-logo-dot">●</span>
        </Link>
        <span className="navbar-logo-sub">REPUESTOS · MARKETPLACE · COMPARADOR DE PRECIOS</span>
      </div>

      <nav className="navbar-links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/marketplace">Marketplace</NavLink>
        <NavLink to="/buscador-precios">Buscador de precios</NavLink>
        <NavLink to="/ayuda">Ayuda</NavLink>
      </nav>

      <div className="navbar-right">
        <CartWidget />
      </div>
    </header>
  );
};

export default NavBar;
