const ItemDetail = ({ item }) => {
  if (!item) return null;

  return (
    <section className="detail">
      <div className="detail__media">
        {item.img ? (
          <img className="detail__img" src={item.img} alt={item.title} />
        ) : (
          <div className="detail__imgPlaceholder">Sin imagen</div>
        )}
      </div>

      <div>
        <h2 className="detail__title">{item.title}</h2>
        <p className="detail__meta">
          {item.brand} · {item.model} · {item.zone} · {item.condition}
        </p>

        <p className="detail__price">${item.price}</p>

        <h3 className="detail__subtitle">Compatibilidad</h3>
        <ul className="detail__list">
          {(item.compatibility ?? []).map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>

        <div className="detail__actions">
          {/* placeholder para ItemCount en próximas entregas */}
          <button className="btn-primary" type="button">
            Agregar (demo)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;
