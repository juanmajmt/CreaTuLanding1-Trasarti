const PriceFinder = () => {
  return (
    <main className="app-main">
      <h2 className="page-title">Buscador de precios</h2>

      <div className="panel">
        <p className="panel-text">
          Ingresá un repuesto (ej: “pastillas de freno Corolla 2017”). A futuro, este módulo integrará
          un servicio externo que devuelva enlaces a tiendas y comparadores.
        </p>

        <div className="price-form">
          <input className="price-input" placeholder="Buscar repuesto, marca, modelo..." />
          <button className="btn-primary" type="button">Buscar</button>
        </div>

        <p className="panel-hint">
          Nota: en esta entrega no se implementa la lógica externa; solo la interfaz y navegación.
        </p>
      </div>
    </main>
  );
};

export default PriceFinder;
