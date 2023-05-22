import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ProductForm from './components/ProductForm';
import UpdateProduct from './components/UpdateProduct';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/create" element={<ProductForm />} />
        <Route path="/products/:id/edit" element={<UpdateProduct />} />
      </Routes>
    </div>
  );
};

export default App;
