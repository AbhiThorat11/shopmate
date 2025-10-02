import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { products } from "./data";

function App() {
  const [cart, setCart] = useState({}); // combined state

  const addToCart = (product) => {
    setCart(prevCart => {
      const currentQty = prevCart[product.id]?.quantity || 0;
      return {
        ...prevCart,
        [product.id]: {
          product,
          quantity: currentQty + 1
        }
      };
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      delete newCart[productId];
      return newCart;
    });
  };

  return (
    <Router>
      <Topbar cartCount={Object.keys(cart).length} />
      <Routes>
        <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
