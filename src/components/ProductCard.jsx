const ProductCard = ({ product, addToCart }) => (
  <div style={{
    borderRadius: '12px',
    overflow: 'hidden',
    textAlign: 'center',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    padding: '15px'
  }}>
    <img
      src={product.image}
      alt={product.name}
      style={{
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: '8px'
      }}
    />
    <h3>{product.name}</h3>
    <p>₹{product.price}</p>
    <button onClick={() => addToCart(product)} style={{
      padding: '8px 12px',
      borderRadius: '8px',
      background: '#28a745',
      color: 'white',
      border: 'none',
      cursor: 'pointer'
    }}>
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
