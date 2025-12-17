import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const getItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((p) => String(p.id) === String(itemId)));
      }, 800);
    });

    getItem.then((res) => setItem(res));
  }, [itemId]);

  if (!item) return <p>Cargando producto...</p>;

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
