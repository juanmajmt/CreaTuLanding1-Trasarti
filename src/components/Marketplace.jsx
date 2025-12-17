import { useNavigate, useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";

const Marketplace = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();

  const goCategory = (cat) => {
    navigate(`/category/${cat}`);
  };

  return (
    <section>
      <h1 className="marketplace__title">Marketplace</h1>

      <div className="marketplace-layout">
        <aside className="filters-panel">
          <h3>Filtros</h3>

          {/* CATEGORÍAS (FUNCIONAN) */}
          <div className="filter-block">
            <h4>Categorías</h4>

            <label className="check-row">
              <input
                type="radio"
                name="cat"
                checked={categoryId === "motor"}
                onChange={() => goCategory("motor")}
              />
              Motor
            </label>

            <label className="check-row">
              <input
                type="radio"
                name="cat"
                checked={categoryId === "frenos"}
                onChange={() => goCategory("frenos")}
              />
              Frenos
            </label>

            <label className="check-row">
              <input
                type="radio"
                name="cat"
                checked={categoryId === "suspension"}
                onChange={() => goCategory("suspension")}
              />
              Suspensión
            </label>

            <label className="check-row">
              <input
                type="radio"
                name="cat"
                checked={categoryId === "electricidad"}
                onChange={() => goCategory("electricidad")}
              />
              Electricidad
            </label>

            <label className="check-row">
              <input
                type="radio"
                name="cat"
                checked={categoryId === "carroceria"}
                onChange={() => goCategory("carroceria")}
              />
              Carrocería
            </label>

            <label className="check-row">
              <input
                type="radio"
                name="cat"
                checked={categoryId === "interior"}
                onChange={() => goCategory("interior")}
              />
              Interior
            </label>

            <button
              type="button"
              className="btn-secondary"
              style={{ marginTop: "10px", width: "100%" }}
              onClick={() => navigate("/marketplace")}
            >
              Ver todo
            </button>
          </div>

          {/* RESTO DE FILTROS (VISIBLES, NO FUNCIONAN AÚN) */}
          <div className="filter-block">
            <h4>Marca</h4>
            <label className="check-row"><input type="checkbox" /> Chevrolet</label>
            <label className="check-row"><input type="checkbox" /> Volkswagen</label>
            <label className="check-row"><input type="checkbox" /> Ford</label>
            <label className="check-row"><input type="checkbox" /> Renault</label>
            <label className="check-row"><input type="checkbox" /> Toyota</label>
          </div>

          <div className="filter-block">
            <h4>Modelo</h4>
            <label className="check-row"><input type="checkbox" /> Corsa Classic</label>
            <label className="check-row"><input type="checkbox" /> Gol Trend</label>
            <label className="check-row"><input type="checkbox" /> Fiesta KD</label>
            <label className="check-row"><input type="checkbox" /> Clio</label>
            <label className="check-row"><input type="checkbox" /> Kangoo</label>
          </div>

          <div className="filter-block">
            <h4>Condición</h4>
            <label className="check-row"><input type="checkbox" /> Nuevo</label>
            <label className="check-row"><input type="checkbox" /> Usado</label>
          </div>

          <div className="filter-block">
            <h4>Zona de venta</h4>
            <label className="check-row"><input type="checkbox" /> Capital Federal</label>
            <label className="check-row"><input type="checkbox" /> Provincia de Buenos Aires</label>
            <label className="check-row"><input type="checkbox" /> Córdoba</label>
            <label className="check-row"><input type="checkbox" /> Mendoza</label>
            <label className="check-row"><input type="checkbox" /> Rosario</label>
          </div>

          <div className="filter-block">
            <h4>Tipo de vendedor</h4>
            <label className="check-row"><input type="checkbox" /> Particular</label>
            <label className="check-row"><input type="checkbox" /> Taller</label>
            <label className="check-row"><input type="checkbox" /> Casa de repuestos</label>
          </div>

          <div className="filter-block">
            <h4>Rango de año</h4>
            <label className="check-row"><input type="checkbox" /> 2005–2010</label>
            <label className="check-row"><input type="checkbox" /> 2011–2017</label>
            <label className="check-row"><input type="checkbox" /> 2018–2024</label>
          </div>
        </aside>

        <main>
          <ItemListContainer />
        </main>
      </div>
    </section>
  );
};

export default Marketplace;
