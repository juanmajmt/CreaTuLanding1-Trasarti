import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header className="navbar">
      {/* Logo + subtítulo */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <span className="navbar-logo-main">RepuesTOP</span>
          <span className="navbar-logo-dot">●</span>
        </div>
        <span className="navbar-logo-sub">
          Repuestos · Marketplace · Comparador de precios
        </span>
      </div>

      {/* Links principales */}
      <nav className="navbar-links">
        <a href="#inicio">Inicio</a>
        <a href="#marketplace">Marketplace</a>
        <a href="#buscador">Buscador de precios</a>
        <a href="#ayuda">Ayuda</a>
      </nav>

      {/* Buscador y carrito */}
      <div className="navbar-right">
        <div className="navbar-search">
          <span className="navbar-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Buscar repuesto, marca, modelo..."
            aria-label="Buscar repuestos"
          />
        </div>

        <CartWidget />
      </div>
    </header>
  );
}

export default NavBar;
