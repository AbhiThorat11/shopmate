import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";


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
      <img src={logo} alt="logo" style={{ width: '40px', height: '40px' }} />
      <span style={{ marginLeft: '10px', fontWeight: 'bold', fontSize: '20px' }}>Shopmate</span>
    </div>
    <div>
      <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Home</Link>
      <Link to="/cart" style={{ color: 'white' }}>Cart ({cartCount})</Link>
    </div>
  </div>
);

export default Topbar;
