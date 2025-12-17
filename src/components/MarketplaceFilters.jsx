const MarketplaceFilters = () => {
  return (
    <aside className="mfilters">
      <h3 className="mfilters__title">Filtros</h3>

      <div className="mfilters__block">
        <h4>Categorías</h4>
        <label><input type="checkbox" /> Motor</label>
        <label><input type="checkbox" /> Frenos</label>
        <label><input type="checkbox" /> Suspensión</label>
        <label><input type="checkbox" /> Electricidad</label>
        <label><input type="checkbox" /> Carrocería</label>
        <label><input type="checkbox" /> Interior</label>
      </div>

      <div className="mfilters__block">
        <h4>Marca</h4>
        <label><input type="checkbox" /> Chevrolet</label>
        <label><input type="checkbox" /> Volkswagen</label>
        <label><input type="checkbox" /> Ford</label>
        <label><input type="checkbox" /> Renault</label>
        <label><input type="checkbox" /> Toyota</label>
      </div>

      <div className="mfilters__block">
        <h4>Modelo</h4>
        <label><input type="checkbox" /> Corsa Classic</label>
        <label><input type="checkbox" /> Gol Trend</label>
        <label><input type="checkbox" /> Fiesta KD</label>
        <label><input type="checkbox" /> Clio</label>
        <label><input type="checkbox" /> Kangoo</label>
      </div>

      <div className="mfilters__block">
        <h4>Condición</h4>
        <label><input type="checkbox" /> Nuevo</label>
        <label><input type="checkbox" /> Usado</label>
      </div>

      <div className="mfilters__block">
        <h4>Zona de venta</h4>
        <label><input type="checkbox" /> Capital Federal</label>
        <label><input type="checkbox" /> Provincia de Buenos Aires</label>
        <label><input type="checkbox" /> Córdoba</label>
        <label><input type="checkbox" /> Mendoza</label>
        <label><input type="checkbox" /> Rosario</label>
      </div>

      <div className="mfilters__block">
        <h4>Tipo de vendedor</h4>
        <label><input type="checkbox" /> Particular</label>
        <label><input type="checkbox" /> Taller</label>
        <label><input type="checkbox" /> Casa de repuestos</label>
      </div>

      <div className="mfilters__block">
        <h4>Rango de año</h4>
        <label><input type="checkbox" /> 2005–2010</label>
        <label><input type="checkbox" /> 2011–2017</label>
        <label><input type="checkbox" /> 2018–2024</label>
      </div>

      <p className="mfilters__hint">
        Nota: por ahora los filtros son visuales (UI). Luego se conectan con el listado.
      </p>
    </aside>
  );
};

export default MarketplaceFilters;
