import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductList from './pages/ProductList';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './pages/Cart';
import CartProvider from './context/CartProvider';

ReactDOM.render(
  <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/ecommerce-app" element={<Home />} />
        <Route path="/products/" element={<ProductList />} />
        {/* <Route path="/product/:productId" element={<ProductPage />} /> */}
        <Route path="/products/product/:productId" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </CartProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
