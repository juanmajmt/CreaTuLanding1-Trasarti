function ItemListContainer({ greeting }) {
  return (
    <section className="hero-layout" id="inicio">
      {/* Columna izquierda: texto principal */}
      <div className="hero-text">
        <span className="hero-kicker">E-commerce de repuestos automotrices</span>

        <h2 className="hero-title">
          {greeting} <span>Repuestos para todos los vehículos</span>
        </h2>

        <p className="hero-subtitle">
          Encontrá repuestos nuevos y usados en el <strong>Marketplace</strong>, 
          o compará precios en el <strong>Buscador de precios</strong> para elegir 
          siempre la mejor opción. RepuesTOP centraliza todo para que cuides tu vehículo al mejor precio.
        </p>

        <div className="hero-badges">
          <div className="hero-badge">Autos · Motos · Camiones</div>
          <div className="hero-badge">Nuevos y usados</div>
          <div className="hero-badge">Filtros por marca y modelo</div>
        </div>

        <div className="hero-actions">
          <button className="btn-primary" id="marketplace">
            Explorar Marketplace
          </button>
          <button className="btn-secondary" id="buscador">
            Buscar mejor precio
          </button>
        </div>
      </div>

      {/* Columna derecha: tarjetas resumen de funciones */}
      <div className="hero-cards">
        <article className="hero-card">
          <h3 className="hero-card-title">
            Marketplace de repuestos <span>entre usuarios</span>
          </h3>
          <p className="hero-card-text">
            Publicá tus repuestos o encontrá piezas únicas: llantas, motores,
            ópticas, electrónica, interiores y más. Ideal para particulares,
            talleres y casas de repuestos.
          </p>
          <p className="hero-card-tagline">
            Subí tus repuestos en minutos. Fácil, rápido y sin vueltas.
          </p>
        </article>

        <article className="hero-card">
          <h3 className="hero-card-title">
            Comparador <span>de precios</span>
          </h3>
          <p className="hero-card-text">
            Consultá múltiples tiendas, marketplaces y proveedores en un solo lugar. 
            Ahorrá tiempo y dinero filtrando por marca, modelo y ubicación.
          </p>
          <p className="hero-card-tagline">
            A futuro integrará APIs y páginas de venta oficiales.
          </p>
        </article>
      </div>
    </section>
  );
}

export default ItemListContainer;
