import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <article className="product-card">
      <div className="product-image">
        <img src={item.img} alt={item.title} />
      </div>

      <div className="product-body">
        <h3 className="product-title">{item.title}</h3>
        <p className="product-price">${item.price}</p>
        <p className="product-meta">
          {item.brand} • {item.model} • {item.condition} • {item.zone}
        </p>

        <Link className="product-link" to={`/item/${item.id}`}>
          Ver detalle
        </Link>
      </div>
    </article>
  );
};

export default Item;
