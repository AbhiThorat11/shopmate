import { Link } from "react-router-dom";

const Topbar = ({ cartCount }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 30px',
    background: '#007bff',
    color: 'white'
  }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="https://source.unsplash.com/40x40/?shopping" alt="logo" />
      <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '20px' }}>Shopmate</span>
    </div>
    <div>
      <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
      <Link to="/cart" style={{ color: 'white' }}>Cart ({cartCount})</Link>
    </div>
  </div>
);

export default Topbar;
