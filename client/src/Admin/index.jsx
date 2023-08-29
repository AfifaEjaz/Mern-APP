import React from 'react'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Category from './pages/Category'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Brand from './pages/Brand';
import Product from './pages/Product';
import Navigation from './components/Navigation';
import Order from './pages/Order';

export default function Admin() {
  return (
    <>
      <Navigation />
      <div style={{ display: 'flex', overflow: 'scroll initial' }}>
        <div className="d-flex "  style={{ height: '100vh' }}>
          {
           <Sidebar />
          }
        </div>

        <div className="row w-100 mx-1">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/product" element={<Product />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={<Navigate to='/' replace={true} />} />

          </Routes>
        </div>
      </div>
    </>
  )
}
