function CartWidget() {
  const itemsInCart = 0;

  return (
    <button className="cart-widget">
      <span className="cart-widget__icon">🛒</span>
      <span>Carrito</span>
      <span className="cart-widget__count">{itemsInCart}</span>
    </button>
  );
}

export default CartWidget;
