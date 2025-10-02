import ProductCard from "../components/ProductCard";

const Home = ({ products, addToCart }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    padding: '20px'
  }}>
    {products.map(product => (
      <ProductCard key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
);

export default Home;
