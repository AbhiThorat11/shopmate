const Cart = ({ cart, removeFromCart }) => {
  const cartItems = Object.values(cart);
  const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> :
        <div>
          {cartItems.map(({ product, quantity }) => (
            <div key={product.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img src={product.image} alt={product.name} style={{
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                borderRadius: '8px',
                marginRight: '15px'
              }} />
              <div style={{ flex: 1 }}>
                <h4>{product.name}</h4>
                <p>₹{product.price} × {quantity} = ₹{product.price * quantity}</p>
              </div>
              <button onClick={() => removeFromCart(product.id)} style={{
                background: '#dc3545',
                color: 'white',
                border: 'none',
                padding: '8px 12px',
                borderRadius: '8px',
                cursor: 'pointer'
              }}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
        </div>
      }
    </div>
  );
};

export default Cart;
