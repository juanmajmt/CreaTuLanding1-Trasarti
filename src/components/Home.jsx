import { Link } from "react-router-dom";
import Repuestin from "../assets/products/Repuestin.png";

const Home = () => {
  return (
    <main className="app-main">
      <section className="hero-layout">
        <div className="hero-text">
          <p className="hero-kicker">E-COMMERCE DE REPUESTOS AUTOMOTRICES</p>

          <h1 className="hero-title">
            ¡Bienvenido a <span>RepuesTOP</span>! Repuestos para todos los vehículos
          </h1>

          <p className="hero-subtitle">
            Encontrá repuestos nuevos y usados en el <strong>Marketplace</strong>, o compará precios
            en el <strong>Buscador de precios</strong> para elegir siempre la mejor opción.
          </p>

          <div className="hero-badges">
            <span className="hero-badge">Autos · Motos · Camiones</span>
            <span className="hero-badge">Nuevos y usados</span>
            <span className="hero-badge">Filtros por marca y modelo</span>
          </div>

          <div className="hero-actions">
            <Link className="btn-primary" to="/marketplace">Explorar Marketplace</Link>
            <Link className="btn-secondary" to="/buscador-precios">Buscar mejor precio</Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-cards">
            <div className="hero-card">
              <div className="hero-card-title">
                Marketplace de repuestos <span>entre usuarios</span>
              </div>
              <div className="hero-card-text">
                Publicá repuestos o encontrá piezas únicas. Ideal para particulares, talleres y casas de repuestos.
              </div>
              <div className="hero-card-tagline">Subí tus repuestos en minutos (próximamente).</div>
            </div>

            <div className="hero-card">
              <div className="hero-card-title">
                Comparador <span>de precios</span>
              </div>
              <div className="hero-card-text">
                Consultá múltiples tiendas y proveedores en un solo lugar. Ahorrá tiempo filtrando por marca y modelo.
              </div>
              <div className="hero-card-tagline">A futuro: integración con APIs y sitios oficiales.</div>
            </div>
          </div>

          <div className="hero-mascot">
            <img className="hero-mascot__img" src={Repuestin} alt="Repuestin, mascota de RepuesTOP" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
