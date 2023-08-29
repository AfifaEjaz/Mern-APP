import React from 'react'
// import Navigation from './components/Navigation'
import Home from './pages/Home'

import ProductsByBrand from './pages/ProductsByBrand'
import ProductsByCategory from './pages/ProductsByCategory'
import Footer from './components/Footer'
import Product from './pages/Product'
import SingleProductPage from './pages/SingleProductPage'
import OrderPlacement from './pages/OrderPlacement'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

export default function index() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:categoryName" element={<ProductsByCategory />} />
        <Route path="/brand/:brandName" element={<ProductsByBrand />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:productName" element={<SingleProductPage />} />
        <Route path="/product/checkout" element={<OrderPlacement />} />
        <Route path="*" element={<Navigate to='/' replace={true} />} />
      </Routes>

      <Footer/>

    </>

  )
}
